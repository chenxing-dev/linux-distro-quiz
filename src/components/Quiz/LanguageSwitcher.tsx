import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLocale } from "@/context/useLocale";


const LanguageSwitcher = () => {
    const { locale, setLocale } = useLocale();
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button onClick={() => setLocale(locale === "en" ? "zh" : "en")} className="flex items-center justify-center rounded-lg w-7 h-7 md:w-8 md:h-8 
                    text-xs md:text-sm font-semibold bg-zinc-800 border border-zinc-700 text-zinc-200 hover:bg-zinc-700 transition-all focus:outline-none cursor-pointer">
                        {locale === "en" ? "EN" : "中"}
                    </button>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 border border-zinc-700 text-zinc-200">{locale === "en" ? "Select language: current language is English" : "选择语言：当前语言是中文"}</TooltipContent>
            </Tooltip>
        </TooltipProvider>)
}

export default LanguageSwitcher