import useStore from "../store";

import lang from "../assets/lang_bar/lang.svg";

const LanguageSection = (props) => {
  const { lang } = useStore();

  const active = lang === props.langL;

  return (
    <div
      className={
        "flex pl-[15px] pr-[80px] pb-[12px] pt-[8px]" +
        (active ? " bg-[#3e3e3e] text-white" : " ")
      }
      onClick={props.func}
    >
      <span className="mr-[30px] font-semibold block text-sm w-[32px]">
        {props.langL}
      </span>
      <div>
        <h3 className="leading-[18px]">{props.label}</h3>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

const Language = () => {
  const { setLang, langOpen, setLangOpen } = useStore();

  return (
    <div
      className={
        "lang_bar flex flex-col fixed right-0 transition-all duration-300 bg-[#e4e4e4] pt-[5px] border-[#949596] border-[1px]" +
        (langOpen ? " bottom-[40px]" : " -bottom-[200px]")
      }
    >
      <LanguageSection
        langL="ENG"
        des="US keyboard"
        label="English (United States)"
        func={() => {
          setLang("ENG");
          setLangOpen(false);
        }}
      />
      <LanguageSection
        langL="VIE"
        des="Vietnamese Telex"
        label="Vietnamese"
        func={() => {
          setLang("VIE");
          setLangOpen(false);
        }}
      />
      <div className="w-[90%] h-[1px] bg-[#b2b2b3] mx-auto"></div>
      <div className="flex pl-[15px] pr-[80px] pb-[16px] pt-[20px]">
        <img
          src={lang}
          alt=""
          className="mr-[30px] font-semibold block text-sm w-[32px]"
          style={{ width: 24, height: 24 }}
        />
        <div>
          <h3 className="leading-[18px]">Language preference</h3>
        </div>
      </div>
    </div>
  );
};

export default Language;
