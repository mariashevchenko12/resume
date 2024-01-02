import React from "react"
import layer0 from "../../images/layer_0.png"
import layer1 from "../../images/layer_1.png"
import layer2 from "../../images/layer_2.png"
import layer3 from "../../images/layer_3.png"
import layer4 from "../../images/layer_4.png"
import layer5 from "../../images/layer_5.png"
import layer6 from "../../images/layer_6.png"

export const ParallaxBackground = () => (
  <>
    <div className="parallax-layer parallax-layer0">
      <img src={layer0.src} alt={"Layer 0"} />
    </div>
    <div className="parallax-layer parallax-layer1">
      <img src={layer1.src} alt={"Layer 1"} />
    </div>
    <div className="parallax-layer parallax-layer2">
      <img src={layer2.src} alt={"Layer 2"} />
    </div>
    <div className="parallax-layer parallax-layer3">
      <img src={layer3.src} alt={"Layer 3"} />
    </div>
    <div className="parallax-layer parallax-layer4">
      <img src={layer4.src} alt={"Layer 4"} />
    </div>
    <div className="parallax-layer parallax-layer5">
      <img src={layer5.src} alt={"Layer 5"} />
    </div>
    <div className="parallax-layer parallax-layer6">
      <img src={layer6.src} alt={"Layer 6"} />
    </div>
  </>
)
