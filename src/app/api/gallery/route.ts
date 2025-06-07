import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

const getCategoryByIndex = (index: number): string => {
  const categories = ["Color", "Corte", "Peinado", "Tratamiento"];
  return categories[index % categories.length];
};

const buildPhotoArray = (): Photo[] => {
  const photos: Photo[] = [];
  let id = 1;

  while (true) {
    const imagePath = path.join(
      process.cwd(),
      "public",
      "img",
      "gallery",
      `trabajo-${id}.jpg`
    );

    try {
      if (fs.existsSync(imagePath)) {
        photos.push({
          id,
          url: `/img/gallery/trabajo-${id}.jpg`,
          title: `Trabajo ${id}`,
          category: getCategoryByIndex(id - 1),
        });
        id++;
      } else {
        break;
      }
    } catch (error) {
      console.error("Error checking file:", error);
      break;
    }
  }

  return photos;
};

export async function GET() {
  const photos = buildPhotoArray();
  return NextResponse.json(photos);
}
