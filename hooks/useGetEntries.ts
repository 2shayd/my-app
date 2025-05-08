import { supabase } from '../app/utils/supabase';
import { useQuery } from "@tanstack/react-query";

export const useGetEntries = () => {
    return useQuery({
        // need to be completed --->
        queryKey: ['entries'],
        queryFn: async () => {
            
        }

        // <--- need to be completed
    })
}