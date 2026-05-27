"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const supabase = createClient();

    async function test() {
      const { data, error } = await supabase
        .from("test")
        .select("*");

      console.log(data, error);
    }

    test();
  }, []);

  return <div>Hello</div>;
}