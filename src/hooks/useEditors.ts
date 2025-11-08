import { useEffect, useState } from "react";

export type Editor = {
  name: string;
  affiliation: string;
  role: string;
  bio?: string;
  photoUrl?: string;
};

type UseEditorsResult = {
  editors: Editor[];
  loading: boolean;
  error?: string | null;
};

/**
 * Fetch editors from a JSON file or API.
 * Default: /data/editors.json which should return `{ editors: Editor[] }`
 * You can change the URL to your API endpoint (e.g. /api/editors).
 */
export function useEditors(url = "/data/editors.json"): UseEditorsResult {
  const [editors, setEditors] = useState<Editor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Accept either { editors: Editor[] } or Editor[]
        const list = Array.isArray(data) ? data : data.editors;
        if (!Array.isArray(list)) throw new Error("Invalid editors payload");
        if (mounted) setEditors(list);
      })
      .catch((err) => {
        console.error("Failed to load editors:", err);
        if (mounted) setError(String(err.message || err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [url]);

  return { editors, loading, error };
}
