import svgPaths from "./svg-xrers26djz";
import imgRightImage from "./318c9b7ab01e6c4660bc72629bd073b338a795ca.png";
import imgParent from "./a2ef009a842fec031ef0c247df24214e05b47e70.png";
import imgParent1 from "./f9f609a63811628ae03b0a862e160e2eae36dcdd.png";
import imgParent2 from "./cd2d4a69fe1e8e060432bf77cee26297ca43e0e6.png";
import imgParent3 from "./0c5cdb4ea0906109c4725714eb4f3d017e30b0ff.png";
import imgParent4 from "./4747f0e8ffbabae5de21ee1b8c8ca6e83dd10f51.png";
import imgParent5 from "./4b682ef73c11576a15fed73cc1a164135b79d882.png";
import imgParent6 from "./78e75abef99fff09807c6e277a683cd469bb041d.png";
import imgProductCardLarge from "./56335375b19dc98ccde98dc5e1e2fb1bd0dc3b72.png";
import imgImage from "./dfedc2726ec9d1d8cc3cbaace9b398067e11a4af.png";

function MainLinks() {
  return (
    <div className="absolute content-stretch flex font-['Satoshi:Regular',sans-serif] gap-[44px] items-start leading-[normal] left-[382px] not-italic text-[#726e8d] text-[16px] top-[90px] whitespace-nowrap" data-name="Main Links">
      <p className="relative shrink-0">Plant pots</p>
      <p className="relative shrink-0">Ceramics</p>
      <p className="relative shrink-0">Tables</p>
      <p className="relative shrink-0">Chairs</p>
      <p className="relative shrink-0">Crockery</p>
      <p className="relative shrink-0">Tableware</p>
      <p className="relative shrink-0">Cutlery</p>
    </div>
  );
}

function RightImage() {
  return (
    <div className="absolute h-[584px] left-[760px] top-0 w-[520px]" data-name="Right Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRightImage} />
    </div>
  );
}

function TopContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[41px] items-start left-[60px] top-[60px]" data-name="Top Content">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[32px] text-white w-[513px]">The furniture brand for the future, with timeless designs</p>
      <div className="bg-[rgba(249,249,249,0.15)] content-stretch flex items-start overflow-clip px-[32px] py-[16px] relative shrink-0" data-name="Button Medium">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">View collection</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#2a254b] h-[584px] left-[80px] overflow-clip top-[60px] w-[1280px]" data-name="Container">
      <div className="absolute font-['Satoshi:Regular',sans-serif] leading-[0] left-[60px] not-italic text-[18px] text-white top-[443px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">A new era in eco friendly furniture with Avelon, the French luxury retail brand</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">{`with nice fonts, tasteful colors and a beautiful way to display things digitally `}</p>
        <p className="leading-[1.5] whitespace-pre">using modern web technologies.</p>
      </div>
      <RightImage />
      <TopContent />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b]">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] whitespace-nowrap">Next day as standard</p>
      <div className="font-['Satoshi:Regular',sans-serif] leading-[0] relative shrink-0 text-[16px] w-[270px]">
        <p className="leading-[1.5] mb-0">Order before 3pm and get your order</p>
        <p className="leading-[1.5]">the next day as standard</p>
      </div>
    </div>
  );
}

function FeatureBlock() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[86px] top-[145px]" data-name="Feature block">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Delivery">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_6.25%_12.5%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
            <g id="Vector">
              <path d="M10.5 7.5H1.5V9H10.5V7.5Z" fill="#2A254B" />
              <path d="M7.5 3.75H0V5.25H7.5V3.75Z" fill="#2A254B" />
              <path d={svgPaths.p26426100} fill="#2A254B" />
            </g>
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start not-italic relative shrink-0 text-[#2a254b]">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] w-[196px]">Recycled packaging</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-[265px]">We use 100% recycled packaging to ensure our footprint is manageable</p>
    </div>
  );
}

function FeatureBlock1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13px] items-start left-[1065px] top-[145px]" data-name="Feature block">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Sprout">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_12.5%_4.51%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 21.4172">
            <path d={svgPaths.p2f9b7700} fill="var(--fill-0, #2A254B)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b]">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] w-[196px]">Unbeatable prices</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-[235px]">For our materials and quality you won’t find better prices anywhere</p>
    </div>
  );
}

function FeatureBlock2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[739px] top-[145px]" data-name="Feature block">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Purchase">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <g id="Vector">
              <path d={svgPaths.p23ff6600} fill="#2A254B" />
              <path d="M10.5 10.5H3V12H10.5V10.5Z" fill="#2A254B" />
            </g>
          </svg>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b]">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] whitespace-nowrap">Made by true artisans</p>
      <div className="font-['Satoshi:Regular',sans-serif] leading-[0] relative shrink-0 text-[16px] w-[266px]">
        <p className="leading-[1.5] mb-0">Handmade crafted goods made with</p>
        <p className="leading-[1.5]">real passion and craftmanship</p>
      </div>
    </div>
  );
}

function FeatureBlock3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[415px] top-[145px]" data-name="Feature block">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Checkmark--outline">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g id="Vector">
              <path d={svgPaths.p6307a00} fill="#2A254B" />
              <path d={svgPaths.p3953aff0} fill="#2A254B" />
            </g>
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Parent() {
  return (
    <div className="h-[375px] relative shrink-0 w-[305px]" data-name="Parent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent} />
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Dandy chair</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£250</p>
    </div>
  );
}

function Parent1() {
  return (
    <div className="h-[375px] relative shrink-0 w-[305px]" data-name="Parent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent1} />
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">Rustic Vase Set</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£155</p>
    </div>
  );
}

function Parent2() {
  return (
    <div className="h-[375px] relative shrink-0 w-[305px]" data-name="Parent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent2} />
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Silky Vase</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£125</p>
    </div>
  );
}

function Parent3() {
  return (
    <div className="h-[375px] pointer-events-none relative shrink-0 w-[305px]" data-name="Parent">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgParent3} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent4} />
      </div>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Lucy Lamp</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£399</p>
    </div>
  );
}

function Parent4() {
  return (
    <div className="h-[375px] relative shrink-0 w-[305px]" data-name="Parent">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f6f6f6] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent} />
        </div>
      </div>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Dandy chair</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£250</p>
    </div>
  );
}

function Parent5() {
  return (
    <div className="h-[375px] pointer-events-none relative shrink-0 w-[305px]" data-name="Parent">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgParent5} />
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[101.67%] left-0 max-w-none top-[-0.83%] w-full" src={imgParent6} />
      </div>
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Dandy chair</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£250</p>
    </div>
  );
}

function ProductCardLarge() {
  return (
    <div className="h-[375px] relative shrink-0 w-[630px]" data-name="Product Card/Large">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProductCardLarge} />
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2a254b] whitespace-nowrap" data-name="Details">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">The Poplar suede sofa</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px]">£980</p>
    </div>
  );
}

function TextContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[351px] not-italic text-[#2a254b] text-center top-[68px]" data-name="Text Content">
      <p className="font-['Clash_Display:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[36px] w-[571px]">Join the club and get the benefits</p>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-[470px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px overflow-clip relative self-stretch">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[32px] not-italic opacity-20 text-[#2a254b] text-[16px] top-[17px] whitespace-nowrap">your@email.com</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white h-[364px] left-[93px] overflow-clip top-[52px] w-[1273px]" data-name="Container">
      <TextContent />
      <div className="absolute content-stretch flex items-start left-[400px] top-[254px] w-[472px]" data-name="Text input">
        <Frame />
        <div className="bg-[#2a254b] content-stretch flex items-start overflow-clip px-[32px] py-[16px] relative shrink-0" data-name="Button Medium">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Sign up</p>
        </div>
      </div>
    </div>
  );
}

function TopContent1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[84px] not-italic top-[72px]" data-name="Top Content">
      <div className="font-['Clash_Display:Regular',sans-serif] leading-[0] relative shrink-0 text-[#2a254b] text-[24px] whitespace-nowrap">
        <p className="leading-[1.4] mb-0">From a studio in London to a global brand with</p>
        <p className="leading-[1.4]">over 400 outlets</p>
      </div>
      <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#505977] text-[16px] w-[536px] whitespace-pre-wrap">
        {`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
      </p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute bg-white h-[603px] left-0 overflow-clip top-0 w-[720px]" data-name="Left Content">
      <TopContent1 />
      <div className="absolute bg-[#f9f9f9] content-stretch flex items-start left-[84px] overflow-clip px-[32px] py-[16px] top-[493px]" data-name="Button Medium">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2a254b] text-[16px] whitespace-nowrap">Get in touch</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[603px] left-[720px] top-0 w-[720px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start leading-[normal] left-[82px] not-italic text-white top-[58px] whitespace-nowrap" data-name="Menu">
      <p className="font-['Clash_Display:Regular',sans-serif] relative shrink-0 text-[16px]">Menu</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">New arrivals</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Best sellers</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Recently viewed</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Popular this week</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">All products</p>
    </div>
  );
}

function Categories() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start leading-[normal] left-[299px] not-italic text-white top-[58px] whitespace-nowrap" data-name="Categories">
      <p className="font-['Clash_Display:Regular',sans-serif] relative shrink-0 text-[16px]">Categories</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Crockery</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Furniture</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Homeware</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Plant pots</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Chairs</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Crockery</p>
    </div>
  );
}

function OurCompany() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start leading-[normal] left-[516px] not-italic text-white top-[58px] whitespace-nowrap" data-name="Our Company">
      <p className="font-['Clash_Display:Regular',sans-serif] relative shrink-0 text-[16px]">Our company</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">About us</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Vacancies</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Contact us</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Privacy</p>
      <p className="font-['Satoshi:Regular',sans-serif] relative shrink-0 text-[14px]">Returns policy</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[1093px] top-[334px]" data-name="Social Links">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--linkedin">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[12.5%_12.5%_12.81%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.925">
            <path d={svgPaths.pe505d00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--facebook">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pbc77900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--instagram">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Vector">
              <path d={svgPaths.p10453480} fill="white" />
              <path d={svgPaths.p15566280} fill="white" />
              <path d={svgPaths.p37e33300} fill="white" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--skype">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[9.54%_9.64%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3743 19.4193">
            <path d={svgPaths.p32c7d200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--twitter">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[22.07%_15.63%_22.06%_15.63%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 13.4078">
            <path d={svgPaths.p333cd180} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Logo--pinterest">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_6.25%_6.25%_6.55%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9285 21.0008">
            <path d={svgPaths.p78bb600} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] flex-[1_0_0] min-h-px min-w-px overflow-clip relative self-stretch">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[32px] not-italic text-[16px] text-white top-[17px] whitespace-nowrap">your@email.com</p>
    </div>
  );
}

export default function HomeV() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home v1">
      <div className="bg-white h-[132px] overflow-clip relative shrink-0 w-[1440px]" data-name="Top Nav">
        <p className="absolute font-['Clash_Display:Regular',sans-serif] leading-[normal] left-[687px] not-italic text-[#22202e] text-[24px] top-[20px] whitespace-nowrap">Avion</p>
        <MainLinks />
        <div className="absolute h-0 left-[1.94%] right-[1.81%] top-[70px]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1386 1">
              <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="1386" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[1396px] overflow-clip size-[16px] top-[26px]" data-name="User--avatar">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g id="Vector">
                <path d={svgPaths.pa486630} fill="#2A254B" />
                <path d={svgPaths.p2b8c7200} fill="#2A254B" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute left-[1364px] overflow-clip size-[16px] top-[26px]" data-name="Shopping--cart">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5123 14.0001">
              <g id="Vector">
                <path d={svgPaths.p8533df0} fill="#2A254B" />
                <path d={svgPaths.p15cba880} fill="#2A254B" />
                <path d={svgPaths.p1f020100} fill="#2A254B" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute left-[28px] overflow-clip size-[16px] top-[26px]" data-name="Search">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5177 13.5177">
              <path d={svgPaths.p23d74400} fill="var(--fill-0, #2A254B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white h-[704px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero Blocks">
        <Container />
      </div>
      <div className="bg-white h-[355px] relative shrink-0 w-[1440px]" data-name="Features">
        <p className="absolute font-['Clash_Display:Regular',sans-serif] leading-[1.4] left-[529px] not-italic text-[#2a254b] text-[24px] top-[60px] whitespace-nowrap">What makes our brand different</p>
        <FeatureBlock />
        <FeatureBlock1 />
        <FeatureBlock2 />
        <FeatureBlock3 />
      </div>
      <div className="bg-white h-[761px] relative shrink-0 w-[1440px]" data-name="Listings">
        <p className="absolute font-['Clash_Display:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#2a254b] text-[32px] top-[80px] whitespace-nowrap">New ceramics</p>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%-487.5px)] top-[calc(50%+2.5px)]" data-name="Product Card">
          <Parent />
          <Details />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%-162.5px)] top-[calc(50%+2.5px)]" data-name="Product Card">
          <Parent1 />
          <Details1 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%+162.5px)] top-[calc(50%+2.5px)]" data-name="Product Card">
          <Parent2 />
          <Details2 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%+487.5px)] top-[calc(50%+2.5px)]" data-name="Product Card">
          <Parent3 />
          <Details3 />
        </div>
        <div className="absolute bg-[#f9f9f9] content-stretch flex items-start left-[635px] overflow-clip px-[32px] py-[16px] top-[649px]" data-name="Button Medium">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2a254b] text-[16px] whitespace-nowrap">View collection</p>
        </div>
      </div>
      <div className="bg-white h-[744px] relative shrink-0 w-[1440px]" data-name="Listings">
        <p className="absolute font-['Clash_Display:Regular',sans-serif] leading-[1.4] left-[80px] not-italic text-[#2a254b] text-[32px] top-[64px] whitespace-nowrap">Our popular products</p>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(62.5%-17.5px)] top-[calc(50%-5px)]" data-name="Product Card">
          <Parent4 />
          <Details4 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(87.5%-52.5px)] top-[calc(50%-5px)]" data-name="Product Card">
          <Parent5 />
          <Details5 />
        </div>
        <div className="absolute bg-[#f9f9f9] content-stretch flex items-center justify-center left-[calc(41.67%+35px)] overflow-clip px-[32px] py-[16px] top-[640px]" data-name="Button Medium">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2a254b] text-[16px] whitespace-nowrap">View collection</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(25%+35px)] top-[calc(50%-7px)]" data-name="Product Card">
          <ProductCardLarge />
          <Details6 />
        </div>
      </div>
      <div className="bg-[#f9f9f9] h-[481px] relative shrink-0 w-[1440px]" data-name="Email sign-up">
        <Container1 />
      </div>
      <div className="h-[603px] relative shrink-0 w-[1440px]" data-name="Features">
        <LeftContent />
        <Image />
      </div>
      <div className="bg-[#2a254b] h-[380px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Menu />
        <Categories />
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[14px] text-white top-[336px] whitespace-nowrap">Copyright 2022 Avion LTD</p>
        <OurCompany />
        <p className="absolute font-['Clash_Display:Regular',sans-serif] leading-[normal] left-[730px] not-italic text-[16px] text-white top-[58px] whitespace-nowrap">Join our mailing list</p>
        <div className="absolute h-0 left-[80px] top-[312px] w-[1277px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1277 1">
              <line id="Line 11" stroke="var(--stroke-0, #4E4D93)" x2="1277" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <SocialLinks />
        <div className="absolute content-stretch flex items-start left-[730px] top-[94px] w-[627px]" data-name="Text input">
          <Frame1 />
          <div className="bg-white content-stretch flex items-start overflow-clip px-[32px] py-[16px] relative shrink-0" data-name="Button Medium">
            <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2a254b] text-[16px] whitespace-nowrap">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}