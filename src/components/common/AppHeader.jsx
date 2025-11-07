import { useState } from "react";
import { Camera, ChevronDown, Search } from "lucide-react";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import Logo from "../../assets/logo.svg?react";

const menu = [
  {
    label: "발견",
    newest: false,
    dropdown: false,
  },
  {
    label: "채용",
    newest: false,
    dropdown: false,
  },
  {
    label: "워크숍/커뮤니티",
    newest: false,
    dropdown: true,
  },
  {
    label: "포폴 피드백",
    newest: true,
    dropdown: false,
  },
  {
    label: "에이전시",
    newest: false,
    dropdown: false,
  },
];

function AppHeader() {
  const [selectedMenu, setSelectedMenu] = useState("발견");

  return (
    <header className="py-2 px-8 w-full flex items-center justify-between border-b">
      <div className="flex items-center gap-10">
        {/* 로고 */}
        <img src={Logo} alt="Logo" className="w-30" />
        <nav className="flex items-center gap-4">
          {menu.map((item) => {
            const isSelected = selectedMenu === item.label;
            return (
              <div
                key={item.label}
                onClick={() => setSelectedMenu(item.label)}
                className={`flex items-center gap-1 font-bold cursor-pointer ${
                  isSelected ? "underline underline-offset-21 decoration-2" : ""
                }`}
              >
                {item.label}
                {item.newest && (
                  <p className="text-xs text-[#05BCC6] font-semibold">New</p>
                )}
                {item.dropdown && <ChevronDown size={16} />}
              </div>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        {/* 검색창 */}
        <div className="flex items-center border px-3 rounded-full bg-neutral-50">
          <Search size={18} className="text-neutral-500" />
          <Input
            placeholder="230,000개 이상의 크리에이티브 검색"
            className={
              "w-65 placeholder:text-neutral-200 border-none focus-visible:ring-0"
            }
          />
        </div>
        {/* 로그인 */}
        <Button variant={"link"}>로그인</Button>
        {/* 회원가입 */}
        <Button className={"rounded-full"}>회원가입</Button>
      </div>
    </header>
  );
}

export default AppHeader;
