
import {createClient} from "@/app/lib/supabase/server";


export async function fetch<T>(
    table: string,

    columns:string[] = ['*'],
    SecondaryQuery?:(query:any) => any ,

): Promise<T[]> {

    const supabaseClient = createClient();

    let query =  supabaseClient.from(table).select(columns.join(', '));
    const { data } = SecondaryQuery ? await  SecondaryQuery(query) : await query;



    return data as T[] ;
}

export async function proc(
    fn :string,
    SecondaryQuery?:(query:any) => any ,
){

    const supabaseClient = createClient();
    let query =  supabaseClient.rpc(fn)
    return  SecondaryQuery ? await  SecondaryQuery(query) : await query;

}


export async function insert<T>(
    table: string,
    data: Partial<T> | Partial<T>[] | null
): Promise<boolean> {
    try {
        const supabaseClient = createClient();
        const {error} = await supabaseClient
            .from(table)
            .insert(data);

        return !error;
    } catch (error) {
        console.error('Error inserting data:', error);
        return false;
    }
}
