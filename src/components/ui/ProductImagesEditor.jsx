import { useRef, useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { getPreviewImg } from "../../lib/utils";

export default function ProductImagesEditor({ images = [], onChange }) {
  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);

  // синхронізація, коли images приходять з API
  useEffect(() => {
    const mapped = images.map((img) =>
      img instanceof File ? URL.createObjectURL(img) : getPreviewImg(img)
    );
    setPreviews(mapped);

    return () => {
      mapped.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [images]);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);    
    onChange([...images, ...files]);
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(previews[index]);
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block text-lg font-medium mb-2 text-textSecondary">
        Зображення товару
      </label>

      <div className="flex flex-wrap gap-3">
        {previews.map((src, i) => (
          <div
            key={i}
            className="relative w-24 h-24 border rounded-lg overflow-hidden bg-white group"
          >
            <img src={src} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => removeImage(i)}
              className="
                absolute top-1 right-1
                bg-black/60 hover:bg-rose-600
                text-white p-1 rounded
                opacity-0 group-hover:opacity-100 transition
              "
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}

        <div
          onClick={() => fileInputRef.current.click()}
          className="
            w-24 h-24 flex items-center justify-center
            border-2 border-dashed border-pink-300
            text-pink-400 hover:border-pink-500 hover:text-pink-500
            rounded-lg cursor-pointer transition
            bg-pink-50/30
          "
        >
          <Plus size={18} />
        </div>

        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFiles}
          className="hidden"
        />
      </div>
    </div>
  );
}
