export type Generation = {
  id: string;
  imageUrl: string;
  prompt: string;
  style: string;
  createdAt: string;
};

export const generateImageMock = async ({
  imageDataUrl,
  prompt,
  style,
}: {
  imageDataUrl: string;
  prompt: string;
  style: string;
}): Promise<Generation> => {
  await new Promise(res => setTimeout(res, 1000 + Math.random() * 1000));

  if (Math.random() < 0.2) throw new Error('Model overloaded');

  return {
    id: Date.now().toString(),
    imageUrl: imageDataUrl,
    prompt,
    style,
    createdAt: new Date().toISOString(),
  };
};
