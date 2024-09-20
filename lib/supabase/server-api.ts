
import {createClient} from "@/lib/supabase/server";


export async function fetch<T>(
    table: string,
    json: boolean = false,
    columns:string[] = ['*'],
    SecondaryQuery?:(query:any) => any ,

): Promise<T[]> {

    const supabaseClient = createClient();

    let query =  supabaseClient.from(table).select(columns.join(', '));
    const { data } = SecondaryQuery ? await  SecondaryQuery(query) : await query;



    return json ? JSON.parse(JSON.stringify(data)) : (data as T[]);
}

export async function proc(
    fn :string,
    SecondaryQuery?:(query:any) => any ,
){

    const supabaseClient = createClient();
    let query =  supabaseClient.rpc(fn)
    return  SecondaryQuery ? await  SecondaryQuery(query) : await query;

}