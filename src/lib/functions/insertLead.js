import { createClient } from "@/lib/supabase/client";

export async function insertLead(email, phone_number) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("leads")
    .insert([
      {
        email,
        phone_number,
      },
    ])
    ;

  if (error) {
    console.error("Error inserting lead:", error.message);
    return { success: false, error };
  }

  return { success: true, data };
}