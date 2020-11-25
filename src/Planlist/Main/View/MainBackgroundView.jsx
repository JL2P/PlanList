import React from "react";
import "./Main.scss";
import MainStar from "./MainStar";

const starPointList = [
  { x: "138", y: "1110.5" },
  { x: "398", y: "1055.5" },
  { x: "719", y: "1284.5" },
  { x: "760", y: "1155.5" },
  { x: "635", y: "1459.5" },
  { x: "478", y: "1335.5" },
  { x: "322", y: "1414.5" },
  { x: "247", y: "1234.5" },
  { x: "154", y: "1425.5" },
  { x: "731", y: "773.5" },
  { x: "599", y: "874.5" },
  { x: "339", y: "819.5" },
  { x: "239", y: "1004.5" },
  { x: "113", y: "863.5" },
  { x: "102", y: "1223.5" },
  { x: "395", y: "1155.5" },
  { x: "826", y: "943.5" },
  { x: "626", y: "1054.5" },
  { x: "887", y: "1366.5" },
  { x: "138", y: "342.5" },
  { x: "398", y: "287.5" },
  { x: "719", y: "516.5" },
  { x: "760", y: "387.5" },
  { x: "635", y: "691.5" },
  { x: "478", y: "567.5" },
  { x: "322", y: "646.5" },
  { x: "247", y: "466.5" },
  { x: "154", y: "657.5" },
  { x: "395", y: "387.5" },
  { x: "826", y: "175.5" },
  { x: "626", y: "286.5" },
  { x: "887", y: "598.5" },
];

const MainBackgroundView = () => {
  return (
    <div class="hero">
      <div class="snow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1536"
          preserveAspectRatio="xMidYMax slice"
        >
          <g fill="#FFF" fill-opacity=".15" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              {starPointList.map((starPoint) => (
                <MainStar x={starPoint.x} y={starPoint.y} />
              ))}
              <image
                href="/images/main/satellite.svg"
                width="50"
                height="50"
                aria-label="satellite"
                x="400"
                y="776"
              />
            </g>
          </g>
          <g fill="#FFF" fill-opacity=".3" transform="translate(65 63)">
            <g id="snow-top-layer">
              <image
                href="/images/main/astronomy.svg"
                width="90"
                height="90"
                aria-label="astronomy"
                x="120"
                y="300"
                transform="rotate(180 874 1438)"
              />
              <image
                href="/images/main/planet.svg"
                width="150"
                height="150"
                aria-label="planet"
                x="720"
                y="776"
              />

              <MainStar x="400" y="776" />
              <MainStar x="8" y="776" />
              <MainStar x="189" y="925" />
              <MainStar x="548" y="844" />
              <MainStar x="685" y="1115" />
              <MainStar x="858" y="909" />
              <MainStar x="874" y="1438" transform="rotate(180 874 1438)" />
              <MainStar x="657" y="1256" transform="rotate(180 657 1256)" />
              <MainStar x="443" y="1372" transform="rotate(180 443 1372)" />
              <MainStar x="339" y="1107" transform="rotate(180 339 1107)" />
              <MainStar x="24" y="1305" transform="rotate(180 24 1305)" />

              <MainStar x="8" y="8" />
              <MainStar x="189" y="157" />
              <MainStar x="548" y="76" />
              <MainStar x="685" y="347" />
              <MainStar x="858" y="141" />
              <MainStar x="874" y="670" transform="rotate(180 874 670)" />
              <MainStar x="657" y="488" transform="rotate(180 657 488)" />
              <MainStar x="443" y="604" transform="rotate(180 443 604)" />
              <MainStar x="339" y="339" transform="rotate(180 339 339)" />
              <MainStar x="24" y="537" transform="rotate(180 24 537)" />

              {/* <circle cx="8" cy="776" r="8" />
              <circle cx="189" cy="925" r="8" />
              <circle cx="548" cy="844" r="8" />
              <circle cx="685" cy="1115" r="8" />
              <circle cx="858" cy="909" r="8" />
              <circle
                cx="874"
                cy="1438"
                r="8"
                transform="rotate(180 874 1438)"
              />
              <circle
                cx="657"
                cy="1256"
                r="8"
                transform="rotate(180 657 1256)"
              />
              <circle
                cx="443"
                cy="1372"
                r="8"
                transform="rotate(180 443 1372)"
              />
              <circle
                cx="339"
                cy="1107"
                r="8"
                transform="rotate(180 339 1107)"
              /> */}
              {/* <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)" />
              <circle cx="8" cy="8" r="8" />
              <circle cx="189" cy="157" r="8" />
              <circle cx="548" cy="76" r="8" />
              <circle cx="685" cy="347" r="8" />
              <circle cx="858" cy="141" r="8" />

              <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)" />
              <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)" />
              <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)" />
              <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)" />
              <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)" /> */}
            </g>
          </g>
        </svg>
      </div>

      <div class="hero__content">
        <circle cx="100" cy="100" r="100" />
      </div>
    </div>
  );
};

export default MainBackgroundView;
