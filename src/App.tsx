import React, { useState, Suspense, lazy } from "react";
import HistoryList from "./components/HistoryList";
import Spinner from "./components/Spinner";
import StyleSelector from "./components/StyleSelector";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useGenerateImage } from "./hooks/useGenerateImage";
import type { Generation } from "./utils/api";

// Lazy-loaded components
const ImageUploader = lazy(() => import("./components/ImageUploader"));
const PromptInput = lazy(() => import("./components/PromptInput"));

const App: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Editorial");
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [history, setHistory] = useLocalStorage<Generation[]>("history", []);
  const { generate, abort, loading, error } = useGenerateImage();

  const handleGenerate = async () => {
    if (!imageDataUrl) return;
    const result = await generate({ imageDataUrl, prompt, style });
    if (result) {
      const updatedHistory = [result, ...history].slice(0, 5);
      setHistory(updatedHistory);
    }
  };

  const restoreHistory = (item: Generation) => {
    setPrompt(item.prompt);
    setStyle(item.style);
    setImageDataUrl(item.imageUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Modelia AI Studio</h1>

      <Suspense fallback={<Spinner />}>
        <ImageUploader onUpload={setImageDataUrl} />
        <PromptInput value={prompt} onChange={setPrompt} />
      </Suspense>

      <StyleSelector value={style} onChange={setStyle} />

      <div className="my-4 flex items-center gap-4">
        <button
          onClick={handleGenerate}
          disabled={loading || !imageDataUrl}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Generate
        </button>
        {loading && <Spinner />}
        {error && <span className="text-red-600">{error}</span>}
        {loading && (
          <button
            onClick={abort}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Abort
          </button>
        )}
      </div>

      {imageDataUrl && !loading && (
        <div className="border p-2 rounded mb-4">
          <h2 className="font-semibold mb-2">Preview</h2>
          <img src={imageDataUrl} alt="Preview" className="max-w-full rounded" />
          <p>
            <strong>Prompt:</strong> {prompt}
          </p>
          <p>
            <strong>Style:</strong> {style}
          </p>
        </div>
      )}

      <HistoryList items={history} onSelect={restoreHistory} />
    </div>
  );
};

export default App;
