
import {createClient } from "@/app/lib/supabase/client";

const supabaseClient = createClient();

export async function fetch<T>(
    table: string,
    json: boolean = false,
    columns: string[] = ['*'],
    SecondaryQuery?: (query: any) => any
): Promise<T[]> {
    try {
        let query = supabaseClient.from(table).select(columns.join(', '));

        const {data, error} = SecondaryQuery
            ? await SecondaryQuery(query)
            : await query;

        if (error) {
            throw new Error(error.message);
        }

        return json ? JSON.parse(JSON.stringify(data)) : (data as T[]);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function proc(
    fn :string,
    SecondaryQuery?:(query:any) => any ,
){

    let query =  supabaseClient.rpc(fn)
    return  SecondaryQuery ? await  SecondaryQuery(query) : await query;

}