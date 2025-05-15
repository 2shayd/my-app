import { Entry } from "@/components/ui/entry-context-provider";
import { supabase } from "@/utils/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useUpdateEntry = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (updatedEntry: Partial<Entry>) => {
            const { data, error } = await supabase
                .from('entries')
                .update(updatedEntry)
                .eq('id', updatedEntry.id);

            if (error) {
                throw new Error(error.message);
            }
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['entries'] })
        },
    })
}

