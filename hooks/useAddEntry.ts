import { supabase } from "@/utils/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Entry } from "@/components/ui/entry-context-provider";

export const useAddEntry = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newEntry) => {
            const { data, error } = await supabase
                .from('entries')
                .insert(newEntry)
            if (error) {
                throw new Error(error.message);
            }
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['entries']});
        },
    })
}