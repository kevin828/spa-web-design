import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "001",
    title: "網站策略與規劃",
    titleEn: "Strategy & Planning",
    description: "從需求訪談到技術規劃，協助你建立具競爭力的網站藍圖，涵蓋使用者旅程、網站架構、SEO 策略、市場分析與開發時程預算。"
  },
  {
    number: "002",
    title: "網站設計與開發",
    titleEn: "Design & Development",
    description: "打造符合品牌形象的多語言響應式網站，整合 UI 設計、CMS 系統建置、客製功能開發及速度與 SEO 優化，提供兼具美感與效能的網頁體驗。"
  },
  {
    number: "003",
    title: "數據分析與行銷優化",
    titleEn: "Analytics & Marketing",
    description: "透過網站數據追蹤與用戶行為分析，掌握流量來源與轉換效益，結合 SEO 成效報告，提供持續優化策略與行銷建議，協助網站精準成長。"
  },
  {
    number: "004",
    title: "智能整合與技術維運",
    titleEn: "AI Integration & Maintenance",
    description: "整合 AI 聊天機器人與智能推薦系統，搭配主機管理與資安防護，提升網站互動智慧與系統穩定性，全面優化使用體驗與營運效能。"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            服務項目
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              OUR SERVICES
            </h2>
            <div className="max-w-xl">
              <p className="text-muted-foreground text-lg mb-6">
                We offer tailored web solutions, from planning and development to AI integration and ongoing support.
              </p>
              <Button 
                variant="outline" 
                className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300"
            >
              <span className="text-primary text-sm font-mono mb-4 block">
                {service.number}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 font-medium">
                {service.titleEn}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
