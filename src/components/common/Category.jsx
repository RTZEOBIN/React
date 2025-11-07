import {
  Archive,
  ArrowDownUp,
  CirclePlay,
  IdCard,
  Joystick,
  Palette,
  PenTool,
  SquareMousePointer,
  TextCursor,
  Layers,
  SquarePen,
  Sparkle,
  Camera,
  Gem,
  Brush,
  Panda,
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { Separator } from "../ui/separator.jsx";

const categories = [
  {
    id: "All",
    text: "전체",
  },
  {
    id: "Videos",
    text: "영상/모션그래픽",
  },
  {
    id: "Graphics",
    text: "그래픽 디자인",
  },
  {
    id: "Branding",
    text: "브랜딩/편집",
  },
  {
    id: "UI",
    text: "UI/UX",
  },
  {
    id: "Illustration",
    text: "일러스트레이션",
  },
  {
    id: "Art",
    text: "디지털아트",
  },
  {
    id: "AI",
    text: "AI",
  },
  {
    id: "Design",
    text: "캐릭터 디자인",
  },
  {
    id: "Package",
    text: "제품/패키지 다자인",
  },
  {
    id: "Photo",
    text: "포토그래피",
  },
  {
    id: "Typo",
    text: "타이포그래피",
  },
  {
    id: "Crafts",
    text: "공예",
  },
  {
    id: "Fine",
    text: "파인아트",
  },
];
function Category() {
  return (
    <div className="py-6 flex items-center justify-center">
      {categories.map((categorie, index) => (
        <React.Fragment key={categorie.id}>
          {index === categories.length - 1 && (
            <div className="flex items-center justify-center">
              <Separator orientation="vertical" className="!h-10 ml-10" />
            </div>
          )}
          <div className="w-full flex flex-col items-center justify-center gap-2 cursor-pointer">
            <div className="flex items-center justify-between">
              {categorie.id === "All" && <Layers size={24} />}
              {categorie.id === "Videos" && <CirclePlay size={24} />}
              {categorie.id === "Graphics" && <Palette size={24} />}
              {categorie.id === "Branding" && <IdCard size={24} />}
              {categorie.id === "UI" && <SquareMousePointer size={24} />}
              {categorie.id === "Illustration" && <PenTool size={24} />}
              {categorie.id === "Art" && <SquarePen size={24} />}
              {categorie.id === "AI" && <Sparkle size={24} />}
              {categorie.id === "Design" && <Panda size={24} />}
              {categorie.id === "Package" && <Archive size={24} />}
              {categorie.id === "Photo" && <Camera size={24} />}
              {categorie.id === "Typo" && <TextCursor size={24} />}
              {categorie.id === "Crafts" && <Gem size={24} />}
              {categorie.id === "Fine" && <Brush size={24} />}
            </div>
            <div>
              <p className="text-sm font-semibold">{categorie.text}</p>
            </div>
          </div>
          {index === 0 && (
            <div className="flex items-center justify-center">
              <Separator orientation="vertical" className="!h-10 mr-10" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Category;
