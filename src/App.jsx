import { Eye, Heart } from "lucide-react";
import AppHeader from "./components/common/AppHeader.jsx";
import Category from "./components/common/Category.jsx";
import { Separator } from "./components/ui/separator.jsx";
import { Skeleton } from "./components/ui/skeleton.jsx";

function App() {
  const gallery = new Array(10).fill(1);
  const subgallery = new Array(15).fill(1);
  return (
    <div className="w-full h-full">
      {/* 배너 */}
      <div className="w-full h-13 bg-[#4EABFF] flex items-center justify-center text-xl font-semibold">
        <p className="text-white">레퍼런스로 시작하는 스몰 브랜딩 워크숍</p>
      </div>
      <div className="w-full h-[34px] flex items-center gap-4 px-8">
        <img src="" alt="" />
        <Separator orientation="vertical" className="!h-3" />
        <p className="font-semibold text-sm">notefolio</p>
        <Separator orientation="vertical" className="!h-3" />
        <p className="font-semibold text-sm text-neutral-400">LOUD</p>
      </div>
      <AppHeader />
      <main className="py-6">
        <section className="flex items-center gap-6 overflow-x-scroll overflow-x-scrol">
          {gallery.map(() => {
            return <Skeleton className="min-w-[520px] w-[520px] h-80" />;
          })}
        </section>
        <div>
          <Category />
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {subgallery.map(() => {
              return (
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <Skeleton className="min-w-[268.5px] w-[300.5px] h-[300.5px] m-5 bg-amber-600" />
                  </div>
                  <div className="w-[300.5px] flex items-center justify-between">
                    <div>임서빈</div>
                    <div className="flex gap-2">
                      <Eye size={16} />
                      <Heart size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
