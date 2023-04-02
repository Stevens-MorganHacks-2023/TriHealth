import React, { PureComponent } from 'react';
import 'react-native';
import { CNutritionToday } from './components/CNutritionToday';
import { CNutritionWeek } from './components/CNutritionWeek';
import { CUserProfile } from './components/CUserProfile';
import { CMind } from './components/CMind';
import { CBodySleep } from './components/CBodySleep';
import { CBody } from './components/CBody';
import { CNutritionCameraInput } from './components/CNutritionCameraInput';
import { CHome } from './components/CHome';
import { CShowKPIsAdjustHabits } from './components/CShowKPIsAdjustHabits';
import { CHealthDataPermissions } from './components/CHealthDataPermissions';
import { CFocuses } from './components/CFocuses';
import { CQuestionHoursofSleep } from './components/CQuestionHoursofSleep';
import { CQuestionActivityLevel } from './components/CQuestionActivityLevel';
import { CQuestionSex } from './components/CQuestionSex';
import { CQuestionWeight } from './components/CQuestionWeight';
import { CQuestionHeight } from './components/CQuestionHeight';
import { CQuestionBirthday } from './components/CQuestionBirthday';
import { CQuestionName } from './components/CQuestionName';
import { CLandingPage } from './components/CLandingPage';

/*const Text = (props) => {
  return <Fragment {...props}>{props.children}</Fragment>
}*/

export class MasterNutritionToday extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CNutritionToday {...this.props} nodeId="1213:6510" />
    </View>
  }
}

export class MasterNutritionWeek extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CNutritionWeek {...this.props} nodeId="1221:6921" />
    </View>
  }
}

export class MasterUserProfile extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CUserProfile {...this.props} nodeId="1218:6555" />
    </View>
  }
}

export class MasterMind extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CMind {...this.props} nodeId="1215:6783" />
    </View>
  }
}

export class MasterBodySleep extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CBodySleep {...this.props} nodeId="1218:6517" />
    </View>
  }
}

export class MasterBody extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CBody {...this.props} nodeId="1221:6949" />
    </View>
  }
}

export class MasterNutritionCameraInput extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CNutritionCameraInput {...this.props} nodeId="1224:7211" />
    </View>
  }
}

export class MasterHome extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CHome {...this.props} nodeId="1202:6667" />
    </View>
  }
}

export class MasterShowKPIsAdjustHabits extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CShowKPIsAdjustHabits {...this.props} nodeId="1224:7358" />
    </View>
  }
}

export class MasterHealthDataPermissions extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CHealthDataPermissions {...this.props} nodeId="1224:7254" />
    </View>
  }
}

export class MasterFocuses extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CFocuses {...this.props} nodeId="1224:6966" />
    </View>
  }
}

export class MasterQuestionHoursofSleep extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionHoursofSleep {...this.props} nodeId="1224:6918" />
    </View>
  }
}

export class MasterQuestionActivityLevel extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionActivityLevel {...this.props} nodeId="1223:6894" />
    </View>
  }
}

export class MasterQuestionSex extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionSex {...this.props} nodeId="1224:6996" />
    </View>
  }
}

export class MasterQuestionWeight extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionWeight {...this.props} nodeId="1223:6864" />
    </View>
  }
}

export class MasterQuestionHeight extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionHeight {...this.props} nodeId="1223:6834" />
    </View>
  }
}

export class MasterQuestionBirthday extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionBirthday {...this.props} nodeId="1223:6804" />
    </View>
  }
}

export class MasterQuestionName extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CQuestionName {...this.props} nodeId="1215:6900" />
    </View>
  }
}

export class MasterLandingPage extends PureComponent {
  render() {
    return <View className="master" style={{backgroundColor: "rgba(108, 168, 223, 1)"}}>
      <CLandingPage {...this.props} nodeId="1218:6818" />
    </View>
  }
}

export function getComponentFromId(id) {
  if (id === "1213:6510") return CNutritionToday1213D6510;
  if (id === "1221:6921") return CNutritionWeek1221D6921;
  if (id === "1218:6555") return CUserProfile1218D6555;
  if (id === "1215:6783") return CMind1215D6783;
  if (id === "1218:6517") return CBodySleep1218D6517;
  if (id === "1221:6949") return CBody1221D6949;
  if (id === "1224:7211") return CNutritionCameraInput1224D7211;
  if (id === "1202:6667") return CHome1202D6667;
  if (id === "1224:7358") return CShowKPIsAdjustHabits1224D7358;
  if (id === "1224:7254") return CHealthDataPermissions1224D7254;
  if (id === "1224:6966") return CFocuses1224D6966;
  if (id === "1224:6918") return CQuestionHoursofSleep1224D6918;
  if (id === "1223:6894") return CQuestionActivityLevel1223D6894;
  if (id === "1224:6996") return CQuestionSex1224D6996;
  if (id === "1223:6864") return CQuestionWeight1223D6864;
  if (id === "1223:6834") return CQuestionHeight1223D6834;
  if (id === "1223:6804") return CQuestionBirthday1223D6804;
  if (id === "1215:6900") return CQuestionName1215D6900;
  if (id === "1218:6818") return CLandingPage1218D6818;
  return null;
}

class CNutritionToday1213D6510 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1213:6511"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1213:6511;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1213:6511;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1213:6511;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1213:6511;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1213:6511;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1213:6511;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1216:6578"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1216:6579"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Nutrition</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":20}} className="outerDiv">
          <View
            id="1253:6850"
            style={{"marginLeft":3,"width":52,"minWidth":52,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1220:6798"
            style={{"marginLeft":99,"width":230,"minWidth":230,"height":null,"marginTop":-773,"marginBottom":543,"minHeight":230}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="280" height="164" viewBox="0 0 280 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" filter="url(#filter0_d_1220_6798)">
<mask id="path-1-outside-1_1220_6798" maskUnits="userSpaceOnUse" x="3.23779" y="0" width="273.562" height="156.321" fill="black">
<rect fill="white" x="3.23779" width="273.562" height="156.321"/>
<path d="M251.752 109.147C245.972 84.3177 232.121 62.1064 212.368 45.99C192.615 29.8737 168.076 20.7623 142.592 20.0822C117.108 19.4021 92.1174 27.1917 71.5332 42.2315C50.949 57.2714 35.9331 78.7124 28.8363 103.198L139.518 135.278L251.752 109.147Z"/>
</mask>
<path d="M251.752 109.147C245.972 84.3177 232.121 62.1064 212.368 45.99C192.615 29.8737 168.076 20.7623 142.592 20.0822C117.108 19.4021 92.1174 27.1917 71.5332 42.2315C50.949 57.2714 35.9331 78.7124 28.8363 103.198L139.518 135.278L251.752 109.147Z" stroke="#8C91FF" stroke-width="40" shape-rendering="crispEdges" mask="url(#path-1-outside-1_1220_6798)"/>
</g>
<defs>
<filter id="filter0_d_1220_6798" x="0" y="0" width="279.824" height="164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1220_6798"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1220_6798" result="shape"/>
</filter>
</defs>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1221:6840"
            style={{"marginLeft":99,"width":230,"minWidth":230,"height":null,"marginTop":-773,"marginBottom":543,"minHeight":230}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" filter="url(#filter0_d_1221_6840)">
<mask id="path-1-outside-1_1221_6840" maskUnits="userSpaceOnUse" x="4.00992" y="0" width="158.392" height="157.389" fill="black">
<rect fill="white" x="4.00992" width="158.392" height="157.389"/>
<path d="M24.0595 20.0496C24.0595 48.2065 34.3641 75.39 53.0292 96.4715C71.6942 117.553 97.4292 131.075 125.379 134.486L139.345 20.0496L24.0595 20.0496Z"/>
</mask>
<path d="M24.0595 20.0496C24.0595 48.2065 34.3641 75.39 53.0292 96.4715C71.6942 117.553 97.4292 131.075 125.379 134.486L139.345 20.0496L24.0595 20.0496Z" stroke="#0009ED" stroke-width="40" shape-rendering="crispEdges" mask="url(#path-1-outside-1_1221_6840)"/>
</g>
<defs>
<filter id="filter0_d_1221_6840" x="0" y="0" width="166" height="164.836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1221_6840"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1221_6840" result="shape"/>
</filter>
</defs>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1221:6854"
            style={{"marginLeft":99,"width":230,"minWidth":230,"height":null,"marginTop":-773,"marginBottom":543,"minHeight":230}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="168" height="167" viewBox="0 0 168 167" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3" filter="url(#filter0_d_1221_6854)">
<mask id="path-1-outside-1_1221_6854" maskUnits="userSpaceOnUse" x="3.17036" y="-0.436221" width="161.793" height="159.783" fill="black">
<rect fill="white" x="3.17036" y="-0.436221" width="161.793" height="159.783"/>
<path d="M43.0371 136.161C69.4064 132.534 93.7153 119.915 111.857 100.437C129.998 80.9591 140.86 55.8159 142.606 29.2556L27.2886 21.6722L43.0371 136.161Z"/>
</mask>
<path d="M43.0371 136.161C69.4064 132.534 93.7153 119.915 111.857 100.437C129.998 80.9591 140.86 55.8159 142.606 29.2556L27.2886 21.6722L43.0371 136.161Z" stroke="#0075FF" stroke-width="40" shape-rendering="crispEdges" mask="url(#path-1-outside-1_1221_6854)"/>
</g>
<defs>
<filter id="filter0_d_1221_6854" x="0" y="0" width="168" height="166.85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1221_6854"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1221_6854" result="shape"/>
</filter>
</defs>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1220:6776"
            style={{"marginLeft":99,"width":230,"minWidth":230,"height":null,"marginTop":-773,"marginBottom":543,"minHeight":230}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="115" cy="115" r="115" fill="#99CFD6"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1225:7106"
            style={{"marginLeft":112,"width":205,"minWidth":205,"height":null,"marginTop":-694,"marginBottom":622,"minHeight":72,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="9"><Text>Carbs 50%</Text></span>
              <br key="br9" />
              <span style={{}} key="17"><Text>Fat 24%</Text></span>
              <br key="br17" />
              <span style={{}} key="end"><Text>Protein 26%  </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1225:7122"
            style={{"marginLeft":54,"width":325,"minWidth":325,"height":null,"marginTop":-491,"marginBottom":466,"minHeight":25,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Calorie Goal : 2000</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1225:7123"
            style={{"marginLeft":70,"width":290,"minWidth":290,"height":null,"marginTop":-459,"marginBottom":435,"minHeight":24,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Calories Today: 600</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1225:7124"
            style={{"marginLeft":96,"width":269,"minWidth":269,"height":null,"marginTop":-427,"marginBottom":408,"minHeight":19,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Protein : 87 g</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1225:7125"
            style={{"marginLeft":74,"width":291,"minWidth":291,"height":null,"marginTop":-400,"marginBottom":380,"minHeight":20,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Dietary Fiber : 8 g</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1225:7126"
            style={{"marginLeft":96,"width":268,"minWidth":268,"height":null,"marginTop":-372,"marginBottom":351,"minHeight":21,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Sodium : 2375 mg</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1225:7127"
            style={{"marginLeft":43,"width":363,"minWidth":363,"height":null,"marginTop":-343,"marginBottom":322,"minHeight":21,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Saturate Fat : 10 g</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1225:7128"
            style={{"marginLeft":100,"width":248,"minWidth":248,"height":null,"marginTop":-314,"marginBottom":287,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Vitamin D : 1 mcg</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1225:7129"
            style={{"marginLeft":112,"width":222,"minWidth":222,"height":null,"marginTop":-287,"marginBottom":250,"minHeight":37,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Sugar : 9 g</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1225:7145"
            style={{"marginLeft":106,"width":254,"minWidth":254,"height":null,"marginTop":-261,"marginBottom":223,"minHeight":38,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Vitamin A : .2 mcg</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1225:7146"
            style={{"marginLeft":98,"width":250,"minWidth":250,"height":null,"marginTop":-206,"marginBottom":189,"minHeight":17,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Water: 1 Bottle</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1221:7035"
            style={{"marginLeft":96,"marginRight":229,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 0.6000000238418579)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7036"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Day</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1221:7046"
            style={{"marginLeft":235,"marginRight":90,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7047"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Week</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1215:6501"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6502"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6503"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1215:6504"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6505"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CNutritionWeek1221D6921 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1221:6930"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6930;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1221:6930;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6930;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6930;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6930;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1221:6930;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1221:6931"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:6932"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Nutrition</Text></span>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1253:6860"
                  style={{"marginLeft":2,"width":52,"minWidth":52,"height":null,"marginTop":-50,"marginBottom":0,"minHeight":50}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":21}} className="outerDiv">
          <View
            id="1225:7178"
            style={{"marginLeft":3,"width":105,"minWidth":105,"height":null,"marginTop":-769,"marginBottom":751,"minHeight":18,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"CENTER","fontStyle":"normal","lineHeight":"115.38461685180664%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Calories</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1221:7108"
            style={{"marginLeft":45.5,"width":0,"minWidth":0,"height":null,"marginTop":-740.0010986328125,"marginBottom":500.9990234375,"minHeight":239.0020751953125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="240" viewBox="0 0 1 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="239.002" x2="0.5" y2="-1.52588e-05" stroke="#007DB3"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1221:7129"
            style={{"marginLeft":231.34576416015625,"width":75.50357055664062,"minWidth":75.50357055664062,"height":null,"marginTop":-723.9228515625,"marginBottom":577.0771484375,"minHeight":146.845703125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="77" height="148" viewBox="0 0 77 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="165.12" y2="-0.5" transform="matrix(0.460159 -0.894957 0.980814 0.225165 0.980807 148)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1221:7131"
            style={{"marginLeft":305.389404296875,"width":60.610595703125,"minWidth":60.610595703125,"height":null,"marginTop":-723.3707275390625,"marginBottom":676.6292724609375,"minHeight":46.741455078125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="76.5403" y2="-0.5" transform="matrix(0.798628 0.615883 -0.872795 0.505321 0 0.50537)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1221:7126"
            style={{"marginLeft":95.49600219726562,"width":44.896942138671875,"minWidth":44.896942138671875,"height":null,"marginTop":-709,"marginBottom":650,"minHeight":59}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="74.14" y2="-0.5" transform="matrix(0.607634 0.798504 -0.950068 0.322796 0 0.322751)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1221:7125"
            style={{"marginLeft":63.862762451171875,"width":33.33522033691406,"minWidth":33.33522033691406,"height":null,"marginTop":-708.9075927734375,"marginBottom":676.09228515625,"minHeight":32.8153076171875}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="46.777" y2="-0.5" transform="matrix(0.728334 -0.716975 0.930757 0.422155 0.930759 33.9601)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1221:7128"
            style={{"marginLeft":179.30364990234375,"width":50.883209228515625,"minWidth":50.883209228515625,"height":null,"marginTop":-694,"marginBottom":577,"minHeight":117}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="118" viewBox="0 0 52 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="127.586" y2="-0.5" transform="matrix(0.399855 0.91942 -0.984222 0.191113 0 0.191171)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1221:7127"
            style={{"marginLeft":141.9449462890625,"width":38.99884033203125,"minWidth":38.99884033203125,"height":null,"marginTop":-693.9443359375,"marginBottom":649.3173828125,"minHeight":44.626953125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="59.2661" y2="-0.5" transform="matrix(0.658168 -0.753152 0.931795 0.363566 0.931807 45)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1221:7111"
            style={{"marginLeft":44.97088623046875,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1221:7112"
            style={{"marginLeft":95.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1221:7113"
            style={{"marginLeft":145.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1221:7114"
            style={{"marginLeft":195.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1221:7122"
            style={{"marginLeft":245.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1221:7123"
            style={{"marginLeft":295.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1221:7124"
            style={{"marginLeft":345.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1221:7109"
            style={{"marginLeft":44.997039794921875,"width":337.0058898925781,"minWidth":337.0058898925781,"marginTop":-502,"marginBottom":502,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="338" height="1" viewBox="0 0 338 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="337.006" y2="0.5" stroke="#007DB3"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":22}} className="outerDiv">
          <View
            id="1225:7179"
            style={{"marginLeft":146,"width":142,"minWidth":142,"height":null,"marginTop":-493,"marginBottom":466,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"CENTER","fontStyle":"normal","lineHeight":"115.38461685180664%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>This Week</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":20}} className="outerDiv">
          <View
            id="1225:7177"
            style={{"marginLeft":58,"width":317,"minWidth":317,"height":null,"marginTop":-448,"marginBottom":273,"minHeight":175,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Overall, you are on track! Keep it up!</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1221:7048"
            style={{"marginLeft":96,"marginRight":229,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7049"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Day</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1221:7050"
            style={{"marginLeft":235,"marginRight":90,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 0.6000000238418579)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7051"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Week</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1221:6925"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:6926"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1221:6927"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1221:6928"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1221:6929"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CUserProfile1218D6555 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1218:6561"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6561;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1218:6561;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6561;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6561;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6561;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1218:6561;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1216:6580"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1216:6581"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":8,"marginBottom":18,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>User Profile</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1224:7208"
            style={{"marginLeft":142,"width":121,"minWidth":121,"height":null,"marginTop":-809,"marginBottom":696,"minHeight":113}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="121" height="113" viewBox="0 0 121 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M121 56.5C121 87.7041 93.9132 113 60.5 113C27.0868 113 0 87.7041 0 56.5C0 25.2959 27.0868 0 60.5 0C93.9132 0 121 25.2959 121 56.5Z" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1224:7210"
            style={{"marginLeft":152,"width":100,"minWidth":100,"height":null,"marginTop":-801,"marginBottom":712.4695434570312,"minHeight":88.53045654296875,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/87ad/99aa/9c14e8dc1c20bbf6bc777103e1c665c2)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1215:6857"
            style={{"marginLeft":42,"width":80,"minWidth":80,"height":null,"marginTop":-696,"marginBottom":629,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Name </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1224:6960"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-696,"marginBottom":629,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Morgan Hacks</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1224:6957"
            style={{"marginLeft":42,"width":358,"minWidth":358,"height":null,"marginTop":-629,"marginBottom":562,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Birthday</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1224:6961"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-629,"marginBottom":562,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>April 2, 2023</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1224:6958"
            style={{"marginLeft":42,"width":358,"minWidth":358,"height":null,"marginTop":-562,"marginBottom":495,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Height</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1224:6962"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-562,"marginBottom":495,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>10’ 3”</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1224:6959"
            style={{"marginLeft":42,"width":358,"minWidth":358,"height":null,"marginTop":-495,"marginBottom":428,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Weight</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1224:6963"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-495,"marginBottom":428,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>100 lbs</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1224:7187"
            style={{"marginLeft":42,"width":358,"minWidth":358,"height":null,"marginTop":-428,"marginBottom":361,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Email</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1224:7189"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-428,"marginBottom":361,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>morganhakz@code.edu</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1224:7188"
            style={{"marginLeft":42,"width":358,"minWidth":358,"height":null,"marginTop":-361,"marginBottom":294,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Password</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1224:7190"
            style={{"marginLeft":148,"width":252,"minWidth":252,"height":null,"marginTop":-361,"marginBottom":294,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>********</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1224:6964"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-294,"marginBottom":254,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:6965"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="18"><Text>Edit User Info    </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="29"><Text>          �</Text></span>
                    <span style={{}} key="end"><Text>�</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1224:7185"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-230,"marginBottom":190,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7186"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Adjust Habits         🡆         </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1224:7191"
            style={{"marginLeft":84,"width":252,"minWidth":252,"height":null,"marginTop":-166,"marginBottom":79,"minHeight":87,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"100.78740119934082%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="25"><Text>Questions? Contact us at </Text></span>
              <span style={{"fontWeight":700,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end"><Text>triHealth@mvp.com</Text></span>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1218:6556"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6557"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6558"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1218:6559"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6560"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CMind1215D6783 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1215:6789"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6789;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1215:6789;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6789;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6789;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6789;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1215:6789;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1215:6790"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-874,"marginBottom":824,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1253:6854"
                  style={{"marginLeft":3,"width":52,"minWidth":52,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6791"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-42,"marginBottom":18,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Mind</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1222:6984"
            style={{"marginLeft":17,"width":387,"minWidth":387,"height":null,"marginTop":-804,"marginBottom":725,"minHeight":79,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="45"><Text>You’re mental health goals for this week are:</Text></span>
              <br key="br45" />
              <span style={{}} key="72"><Text>Record your mood every day</Text></span>
              <br key="br72" />
              <span style={{}} key="end"><Text>Meditate for 2 minutes, 3 times a week</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1215:6792"
            style={{"marginLeft":27,"width":383,"minWidth":383,"height":null,"marginTop":-738,"marginBottom":603,"minHeight":135,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":2}} className="outerDiv">
                <View
                  id="1215:6796"
                  style={{"marginLeft":324,"width":49,"minWidth":49,"height":null,"marginTop":23,"marginBottom":63,"minHeight":49,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/3008/cd69/4f50151fc0f83cd3f1f1d849435489c6)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv">
                <View
                  id="1215:6797"
                  style={{"marginLeft":21,"width":39,"minWidth":39,"height":null,"marginTop":-107,"marginBottom":68,"minHeight":39,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/9e23/3291/840785d81ad532c997b9ffd8111a3e47)","backgroundSize":"cover"}}
                  className="innerDiv"
                >
                  <View>
                  </View>
                </View>
              </View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6794"
                  style={{"marginLeft":60,"width":264,"minWidth":264,"height":null,"marginTop":-85,"marginBottom":71,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1215:6794;11:3904"
                        style={{"marginLeft":16,"marginRight":16,"flexGrow":1,"marginTop":8,"marginBottom":-22,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"zIndex":1}} className="outerDiv">
                            <View
                              id="I1215:6794;151:6624"
                              style={{"marginLeft":0,"width":128.010009765625,"minWidth":128.010009765625,"height":null,"marginTop":12,"marginBottom":12,"minHeight":4,"backgroundColor":"rgba(0, 122, 255, 1)"}}
                              className="innerDiv"
                            >
                              <View>
                                <View style={{"alignItems":"center"}} className="outerDiv centerer">
                                  <View
                                    id="I1215:6794;151:6625"
                                    style={{"marginLeft":0,"marginRight":128,"flexGrow":1,"height":4,"marginTop":0}}
                                    className="innerDiv"
                                  >
                                    <View>
                                    </View>
                                  </View>
                                </View>
                                <View style={{"zIndex":1,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
                                  <View
                                    id="I1215:6794;151:6626"
                                    style={{"marginRight":0,"width":28,"minWidth":28,"height":28,"marginTop":0}}
                                    className="innerDiv"
                                  >
                                    <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_74)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 35C34.732 35 41 28.732 41 21C41 13.268 34.732 7 27 7C19.268 7 13 13.268 13 21C13 28.732 19.268 35 27 35Z" fill="white"/>
</g>
<defs>
<filter id="filter0_dd_0_74" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="6.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_74"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.5"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_74" result="effect2_dropShadow_0_74"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_74" result="shape"/>
</filter>
</defs>
</svg>
`}} />
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="I1215:6794;10:2597"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"height":4,"marginTop":0,"backgroundColor":"rgba(120, 120, 128, 1)","opacity":0.20000000298023224}}
                              className="innerDiv"
                            >
                              <View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":4}} className="outerDiv">
                <View
                  id="1215:6793"
                  style={{"marginLeft":272,"width":145,"minWidth":145,"height":null,"marginTop":-44,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1215:6793;9:1810"
                        style={{"marginLeft":40,"marginRight":40,"flexGrow":1,"marginTop":11,"marginBottom":11,"color":"rgba(0, 122, 255, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>Submit</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1215:6795"
                  style={{"marginLeft":0,"width":272,"minWidth":272,"height":null,"marginTop":-39,"marginBottom":5,"minHeight":34,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>How are you feeling today? </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1222:6985"
            style={{"marginLeft":38,"width":362,"minWidth":362,"height":null,"marginTop":-586,"marginBottom":369,"minHeight":217,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/6369/7355/9293cee399dbb8278015f6f2a56192e4)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1222:7028"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-372,"marginBottom":101,"minHeight":271,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1222:7031"
                  style={{"marginLeft":52,"width":327,"minWidth":327,"height":null,"marginTop":26,"marginBottom":0,"minHeight":245,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"CENTER","fontStyle":"normal","lineHeight":"141.02564811706543%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="23"><Text>Did you meditate Today?</Text></span>
                    <br key="br23" />
                    <br key="br24" />
                    <br key="br25" />
                    <br key="br26" />
                    <br key="br27" />
                    <span style={{"fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="51"><Text>Total Times this Week: </Text></span>
                    <span style={{"fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="52"><Text>1</Text></span>
                    <span style={{"fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="53"><Text> </Text></span>
                    <br key="br53" />
                  </View>
                </View>
              </View>
              <View style={{}} className="outerDiv">
                <View
                  id="1222:7032"
                  style={{"marginLeft":59,"width":312,"minWidth":312,"height":null,"marginTop":-194,"marginBottom":165,"minHeight":29,"backgroundColor":"rgba(118, 118, 128, 0.11999999731779099)","overflow":"hidden"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1222:7032;6:824"
                        style={{"marginLeft":2,"marginRight":156,"flexGrow":1,"marginTop":2,"marginBottom":2,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{}} className="outerDiv centerer">
                            <View
                              id="I1222:7032;6:824;6:811"
                              style={{"marginLeft":8,"marginRight":8,"flexGrow":1,"marginTop":5,"marginBottom":4,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"CENTER","fontStyle":"normal","lineHeight":"147.9290008544922%","letterSpacing":"-0.07999999821186066px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>Yes</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="I1222:7032;6:825"
                        style={{"marginLeft":156,"marginRight":2,"flexGrow":1,"marginTop":2,"marginBottom":2,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{}} className="outerDiv centerer">
                            <View
                              id="I1222:7032;6:825;6:807"
                              style={{"marginLeft":8,"marginRight":8,"flexGrow":1,"marginTop":5,"marginBottom":4,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"CENTER","fontStyle":"normal","lineHeight":"147.9290008544922%","letterSpacing":"-0.07999999821186066px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>No</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1215:6784"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6785"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6786"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1215:6787"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6788"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CBodySleep1218D6517 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1218:6523"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6523;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1218:6523;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6523;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6523;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6523;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1218:6523;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1216:6582"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1253:6863"
                  style={{"marginLeft":4,"width":52,"minWidth":52,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv">
                <View
                  id="1216:6583"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-42,"marginBottom":18,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Body</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1221:7059"
            style={{"marginLeft":23,"width":383,"minWidth":383,"height":null,"marginTop":-715,"marginBottom":332,"minHeight":383}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="383" height="192" viewBox="0 0 383 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M383 191.5C383 166.352 378.047 141.45 368.423 118.216C358.799 94.9823 344.693 73.8715 326.911 56.0891C309.129 38.3066 288.018 24.2008 264.784 14.5771C241.55 4.95329 216.648 -1.09926e-06 191.5 0C166.352 1.09926e-06 141.45 4.9533 118.216 14.5771C94.9823 24.2009 73.8715 38.3066 56.089 56.0891C38.3066 73.8715 24.2008 94.9823 14.5771 118.216C4.95329 141.45 -2.19852e-06 166.352 0 191.5L191.5 191.5H383Z" fill="#99E0FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1221:7061"
            style={{"marginLeft":166.971923828125,"width":155.05615234375,"minWidth":155.05615234375,"height":null,"marginTop":-667.5,"marginBottom":522.5,"minHeight":145}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="84" height="152" viewBox="0 0 84 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.33 2.9538C63.1951 0.431848 60.2307 -0.692593 57.7088 0.442279L16.6113 18.9361C14.0894 20.071 12.9649 23.0354 14.0998 25.5574C15.2347 28.0793 18.1991 29.2038 20.7211 28.0689L57.2521 11.6299L73.6911 48.161C74.826 50.6829 77.7904 51.8073 80.3123 50.6725C82.8343 49.5376 83.9587 46.5732 82.8239 44.0512L64.33 2.9538ZM9.36387 152L64.4456 6.78457L55.0817 3.23276L1.29613e-07 148.448L9.36387 152Z" fill="#0075FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1221:6876"
            style={{"marginLeft":23,"width":383,"minWidth":383,"height":null,"marginTop":-664.568115234375,"marginBottom":523.5,"minHeight":141.068115234375}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="383" height="142" viewBox="0 0 383 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M383 141.068C383 90.2791 362.824 41.5703 326.911 5.6571C290.998 -30.2561 307.5 116.568 191.5 116.568C69 116.568 90.4132 -30.2561 54.5 5.6571C18.5868 41.5703 7.66892e-06 90.2791 0 141.068L191.5 141.068H383Z" fill="#2C29AC"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1221:7056"
            style={{"marginLeft":87,"width":250,"minWidth":250,"height":null,"marginTop":-644,"marginBottom":403,"minHeight":241}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="250" height="121" viewBox="0 0 250 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M250 120.5C250 88.5414 236.83 57.8918 213.388 35.2936C189.946 12.6955 158.152 2.41281e-06 125 0C91.8479 -2.41281e-06 60.0537 12.6955 36.6117 35.2936C13.1696 57.8918 5.00582e-06 88.5414 0 120.5L125 120.5H250Z" fill="#AECAFF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1253:6866"
            style={{"marginLeft":75,"width":283,"minWidth":283,"height":null,"marginTop":-534,"marginBottom":459,"minHeight":75,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>8 Hours of Sleep</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1221:7062"
            style={{"marginLeft":210,"width":13,"minWidth":13,"height":null,"marginTop":-529,"marginBottom":517,"minHeight":12}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="6.5" cy="6" rx="6.5" ry="6" fill="#0075FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1225:7147"
            style={{"marginLeft":47,"width":339,"minWidth":339,"height":null,"marginTop":-484,"marginBottom":357,"minHeight":127,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>You got 8 hours of sleep last night! That is on track!</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1221:7052"
            style={{"marginLeft":93,"marginRight":232,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 0.6000000238418579)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7053"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Sleep</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1221:7054"
            style={{"marginLeft":232,"marginRight":93,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7055"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Excercise</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1218:6518"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6519"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6520"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1218:6521"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6522"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CBody1221D6949 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1221:6955"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6955;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1221:6955;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6955;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6955;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1221:6955;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1221:6955;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1221:6956"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1253:6851"
                  style={{"marginLeft":3,"width":52,"minWidth":52,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:6957"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-42,"marginBottom":18,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Body</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1225:7075"
            style={{"marginLeft":40,"width":350,"minWidth":350,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71,"backgroundColor":"rgba(134, 190, 255, 1)","boxShadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1225:7085"
            style={{"marginLeft":340,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1225:7077"
            style={{"marginLeft":89,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1225:7078"
            style={{"marginLeft":139,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1225:7079"
            style={{"marginLeft":189,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1225:7083"
            style={{"marginLeft":240,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1225:7084"
            style={{"marginLeft":290,"width":0,"minWidth":0,"height":null,"marginTop":-737,"marginBottom":666,"minHeight":71}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="71" viewBox="0 0 1 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="71" x2="0.5" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1225:7172"
            style={{"marginLeft":252,"width":24,"minWidth":24,"height":null,"marginTop":-713,"marginBottom":690,"minHeight":23,"backgroundColor":"rgba(64, 134, 239, 1)"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1225:7105"
            style={{"marginLeft":153,"width":24,"minWidth":24,"height":null,"marginTop":-707,"marginBottom":696,"minHeight":11,"backgroundColor":"rgba(20, 0, 255, 1)"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1225:7170"
            style={{"marginLeft":51,"width":24,"minWidth":24,"height":null,"marginTop":-707,"marginBottom":696,"minHeight":11,"backgroundColor":"rgba(20, 0, 255, 1)"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1225:7076"
            style={{"marginLeft":40,"width":347.99957275390625,"minWidth":347.99957275390625,"height":null,"marginTop":-666,"marginBottom":665.949462890625,"minHeight":0.050537109375}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="348" height="2" viewBox="0 0 348 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="7.26416e-05" y1="0.5" x2="348" y2="0.550559" stroke="black"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1225:7148"
            style={{"marginLeft":38,"width":334,"minWidth":334,"height":null,"marginTop":-650,"marginBottom":612,"minHeight":38,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Steps this week: 43,298</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1225:7173"
            style={{"marginLeft":38,"width":354,"minWidth":354,"height":null,"marginTop":-612,"marginBottom":582,"minHeight":30,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Steps today: 2,600</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1225:7174"
            style={{"marginLeft":51,"width":337,"minWidth":337,"height":null,"marginTop":-563,"marginBottom":536,"minHeight":27,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Exercised two times this week! </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1225:7176"
            style={{"marginLeft":45,"width":349,"minWidth":349,"height":null,"marginTop":-530,"marginBottom":455,"minHeight":75,"color":"rgba(0, 0, 0, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"0.3799999952316284px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>One more to go! You got this!</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1221:7063"
            style={{"marginLeft":93,"marginRight":232,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7064"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Sleep</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1221:7065"
            style={{"marginLeft":232,"marginRight":93,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 0.6000000238418579)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:7066"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Excercise</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1221:6950"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1221:6951"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1221:6952"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1221:6953"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1221:6954"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CNutritionCameraInput1224D7211 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:7217"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7217;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:7217;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7217;839:7142"
                  style={{"width":27.40119171142578,"marginLeft":309.4011917114258,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7217;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7217;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:7217;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:7218"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-872,"marginBottom":822,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7219"
                  style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":0,"marginBottom":0,"minHeight":50,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Nutrition (camera)</Text></span>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1253:6857"
                  style={{"marginLeft":10,"width":52,"minWidth":52,"height":null,"marginTop":-50,"marginBottom":0,"minHeight":50}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52 25C52 38.8071 40.5833 50 26.5 50C12.4167 50 1 38.8071 1 25C1 11.1929 12.4167 0 26.5 0C40.5833 0 52 11.1929 52 25Z" fill="#4A83B8"/>
<path d="M37 36H15V21.6522L25.8254 14L37 21.6522V36Z" fill="white" stroke="white" stroke-width="5"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1224:7224"
            style={{"marginLeft":45.5,"width":0,"minWidth":0,"height":null,"marginTop":-740.0010986328125,"marginBottom":500.9990234375,"minHeight":239.0020751953125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1" height="240" viewBox="0 0 1 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="239.002" x2="0.5" y2="-1.52588e-05" stroke="#007DB3"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1224:7237"
            style={{"marginLeft":231.34576416015625,"width":75.50357818603516,"minWidth":75.50357818603516,"height":null,"marginTop":-723.9228515625,"marginBottom":577.0771484375,"minHeight":146.845703125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="77" height="148" viewBox="0 0 77 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="165.12" y2="-0.5" transform="matrix(0.460159 -0.894957 0.980814 0.225165 0.980814 148)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1224:7238"
            style={{"marginLeft":305.389404296875,"width":60.61060333251953,"minWidth":60.61060333251953,"height":null,"marginTop":-723.3707275390625,"marginBottom":676.6292724609375,"minHeight":46.741455078125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="76.5403" y2="-0.5" transform="matrix(0.798628 0.615883 -0.872794 0.505321 0 0.50537)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1224:7234"
            style={{"marginLeft":95.49600219726562,"width":44.89695739746094,"minWidth":44.89695739746094,"height":null,"marginTop":-709,"marginBottom":650,"minHeight":59}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="74.14" y2="-0.5" transform="matrix(0.607633 0.798503 -0.950068 0.322796 0 0.322751)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1224:7233"
            style={{"marginLeft":63.862762451171875,"width":33.33522033691406,"minWidth":33.33522033691406,"height":null,"marginTop":-708.9075927734375,"marginBottom":676.09228515625,"minHeight":32.8153076171875}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="46.777" y2="-0.5" transform="matrix(0.728334 -0.716975 0.930757 0.422155 0.930759 33.9601)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1224:7236"
            style={{"marginLeft":179.30364990234375,"width":50.883216857910156,"minWidth":50.883216857910156,"height":null,"marginTop":-694,"marginBottom":577,"minHeight":117}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="52" height="118" viewBox="0 0 52 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="127.586" y2="-0.5" transform="matrix(0.399855 0.91942 -0.984222 0.191113 0 0.191171)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1224:7235"
            style={{"marginLeft":141.94493103027344,"width":38.99884033203125,"minWidth":38.99884033203125,"height":null,"marginTop":-693.9443359375,"marginBottom":649.3173828125,"minHeight":44.626953125}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="59.2661" y2="-0.5" transform="matrix(0.658168 -0.753152 0.931795 0.363566 0.931792 45)" stroke="#1400FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1224:7226"
            style={{"marginLeft":44.97088623046875,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1224:7227"
            style={{"marginLeft":95.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1224:7228"
            style={{"marginLeft":145.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1224:7229"
            style={{"marginLeft":195.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1224:7230"
            style={{"marginLeft":245.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1224:7231"
            style={{"marginLeft":295.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1224:7232"
            style={{"marginLeft":345.5,"width":20,"minWidth":20,"marginTop":-619.25,"marginBottom":619.25,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="20" y2="0.5" stroke="#5699FE"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1224:7225"
            style={{"marginLeft":44.997039794921875,"width":337.00592041015625,"minWidth":337.00592041015625,"marginTop":-502,"marginBottom":502,"height":null}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="338" height="1" viewBox="0 0 338 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="337.006" y2="0.5" stroke="#007DB3"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1224:7220"
            style={{"marginLeft":96,"marginRight":229,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7221"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Day</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1224:7222"
            style={{"marginLeft":235,"marginRight":90,"flexGrow":1,"height":null,"marginTop":-134,"marginBottom":94,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 0.6000000238418579)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7223"
                  style={{"marginLeft":6,"width":94,"minWidth":94,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Week</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1224:7212"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7213"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7214"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:7215"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7216"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CHome1202D6667 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1218:6539"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6539;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1218:6539;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6539;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6539;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6539;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1218:6539;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1257:6892"
            style={{"marginLeft":361,"width":48,"minWidth":48,"height":null,"marginTop":-885,"marginBottom":837,"minHeight":48,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/87ad/99aa/9c14e8dc1c20bbf6bc777103e1c665c2)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1214:6541"
            style={{"marginLeft":51,"width":328,"minWidth":328,"height":null,"marginTop":-834,"marginBottom":721,"minHeight":113,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1214:6539"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":14,"marginBottom":11,"minHeight":88,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Good morning, Jane. Great job on maintaining your habits! You got this :D </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1214:6542"
            style={{"marginLeft":51,"width":328,"minWidth":328,"height":null,"marginTop":-705,"marginBottom":665,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1214:6543"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="13"><Text>Nutrition    </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="28"><Text>              �</Text></span>
                    <span style={{}} key="end"><Text>�</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1221:6920"
            style={{"marginLeft":70,"width":327,"minWidth":327,"height":null,"marginTop":-662,"marginBottom":517,"minHeight":145,"color":"rgba(139, 143, 147, 1)","fontSize":25,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>You’ve gotten through 30% of your calorie intake!</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1214:6548"
            style={{"marginLeft":50,"marginRight":52,"flexGrow":1,"height":null,"marginTop":-515,"marginBottom":475,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1214:6549"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="7"><Text>Body   </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="25"><Text>                 �</Text></span>
                    <span style={{}} key="end"><Text>�</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1222:6863"
            style={{"marginLeft":51,"width":330,"minWidth":330,"height":null,"marginTop":-446,"marginBottom":315,"minHeight":131,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1222:6864"
                  style={{"marginLeft":19,"width":287,"minWidth":287,"height":null,"marginTop":0,"marginBottom":-31,"minHeight":162,"color":"rgba(139, 143, 147, 1)","fontSize":25,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>You’ve exercised two times this week. Only one more to reach your goal!</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1214:6546"
            style={{"marginLeft":51,"marginRight":51,"flexGrow":1,"height":null,"marginTop":-304,"marginBottom":264,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1214:6547"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="4"><Text>Mind</Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="23"><Text>                  �</Text></span>
                    <span style={{}} key="end"><Text>�</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1222:6901"
            style={{"marginLeft":70,"width":335,"minWidth":335,"height":null,"marginTop":-248,"marginBottom":133,"minHeight":115,"color":"rgba(139, 143, 147, 1)","fontSize":25,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"120.94488143920898%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>You got more than seven hours of sleep last night,  keep it up!</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1215:6506"
            style={{"marginLeft":-4,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6507"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6508"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1215:6509"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6510"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CShowKPIsAdjustHabits1224D7358 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1224:7373"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7373;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:7373;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7373;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7373;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7373;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:7373;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1224:7360"
            style={{"marginLeft":51,"width":330,"minWidth":330,"height":null,"marginTop":-834,"marginBottom":789,"minHeight":45,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7361"
                  style={{"marginLeft":22,"width":285,"minWidth":285,"height":null,"marginTop":-8,"marginBottom":-8,"minHeight":61,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Change Focus</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:7362"
            style={{"marginLeft":54,"width":328,"minWidth":328,"height":null,"marginTop":-773,"marginBottom":733,"minHeight":40,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7363"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="13"><Text>Nutrition    </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end"><Text>              </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1224:7366"
            style={{"marginLeft":50,"marginRight":52,"flexGrow":1,"height":null,"marginTop":-515,"marginBottom":475,"minHeight":40,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7367"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="7"><Text>Body   </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end"><Text>                 </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1265:6980"
            style={{"marginLeft":51,"marginRight":51,"flexGrow":1,"height":null,"marginTop":-304,"marginBottom":264,"minHeight":40,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1265:6981"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="4"><Text>Mind</Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end"><Text>                  </Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:7364"
            style={{"marginLeft":53,"marginRight":49,"flexGrow":1,"height":null,"marginTop":-129,"marginBottom":89,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7365"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Confirm                                         🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1224:7368"
            style={{"marginLeft":-4,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7369"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7370"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:7371"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7372"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CHealthDataPermissions1224D7254 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:7260"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7260;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:7260;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7260;839:7142"
                  style={{"width":27.401123046875,"marginLeft":309.401123046875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7260;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7260;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:7260;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1239:6837"
            style={{"marginLeft":0,"width":429,"minWidth":429,"height":null,"marginTop":-885,"marginBottom":0,"minHeight":885,"backgroundImage":"url(https://s3-us-west-2.amazonaws.com/figma-alpha/img/4ef7/5bef/22a1a249d7ba498d87c60b548a96194d)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:7255"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7256"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7257"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:7258"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7259"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CFocuses1224D6966 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:6972"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6972;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:6972;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6972;839:7142"
                  style={{"width":27.401123046875,"marginLeft":309.401123046875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6972;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6972;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:6972;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:7033"
            style={{"marginLeft":-1,"width":431,"minWidth":431,"height":null,"marginTop":-871,"marginBottom":760,"minHeight":111,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7034"
                  style={{"marginLeft":0,"width":431,"minWidth":431,"height":null,"marginTop":37,"marginBottom":37,"minHeight":37,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"97.98774719238281%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>What do you want to focus on?</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":14}} className="outerDiv">
          <View
            id="1224:7051"
            style={{"marginLeft":0,"width":430,"minWidth":430,"height":null,"marginTop":-760,"marginBottom":693,"minHeight":67,"color":"rgba(139, 143, 147, 1)","fontSize":20,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Pick 1-3 key focuses</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1224:7042"
            style={{"marginLeft":144,"width":137,"minWidth":137,"height":null,"marginTop":-685,"marginBottom":547,"minHeight":138}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="137" height="138" viewBox="0 0 137 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M137 69C137 107.108 106.332 138 68.5 138C30.6685 138 0 107.108 0 69C0 30.8924 30.6685 0 68.5 0C106.332 0 137 30.8924 137 69Z" fill="#9DD0FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1224:7054"
            style={{"marginLeft":144,"width":135,"minWidth":135,"height":null,"marginTop":-649,"marginBottom":582,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Name </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":15}} className="outerDiv">
          <View
            id="1224:7053"
            style={{"marginLeft":144,"width":135,"minWidth":135,"height":null,"marginTop":-649,"marginBottom":582,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>hydration</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1224:7041"
            style={{"marginLeft":54,"width":94,"minWidth":94,"height":null,"marginTop":-599,"marginBottom":517,"minHeight":82}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="94" height="82" viewBox="0 0 94 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="47" cy="41" rx="47" ry="41" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":16}} className="outerDiv">
          <View
            id="1224:7055"
            style={{"marginLeft":54,"width":90,"minWidth":90,"height":null,"marginTop":-591,"marginBottom":530,"minHeight":61,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>rest </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1224:7044"
            style={{"marginLeft":264,"width":114,"minWidth":114,"height":null,"marginTop":-582,"marginBottom":500,"minHeight":82}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="114" height="82" viewBox="0 0 114 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="57" cy="41" rx="57" ry="41" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":17}} className="outerDiv">
          <View
            id="1224:7056"
            style={{"marginLeft":254,"width":135,"minWidth":135,"height":null,"marginTop":-574,"marginBottom":507,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>exercise </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1224:7043"
            style={{"marginLeft":163,"width":118,"minWidth":118,"height":null,"marginTop":-530,"marginBottom":434,"minHeight":96}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="118" height="96" viewBox="0 0 118 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="59" cy="48" rx="59" ry="48" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":18}} className="outerDiv">
          <View
            id="1224:7057"
            style={{"marginLeft":155,"width":135,"minWidth":135,"height":null,"marginTop":-515,"marginBottom":448,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="8"><Text>calorie </Text></span>
              <br key="br8" />
              <span style={{}} key="end"><Text>intake </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":8}} className="outerDiv">
          <View
            id="1224:7045"
            style={{"marginLeft":27,"width":136,"minWidth":136,"height":null,"marginTop":-504,"marginBottom":394,"minHeight":110}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="136" height="110" viewBox="0 0 136 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="68" cy="55" rx="68" ry="55" fill="#9DD0FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":19}} className="outerDiv">
          <View
            id="1224:7058"
            style={{"marginLeft":28,"width":135,"minWidth":135,"height":null,"marginTop":-482,"marginBottom":415,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>meditation </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":10}} className="outerDiv">
          <View
            id="1224:7047"
            style={{"marginLeft":272,"width":118,"minWidth":118,"height":null,"marginTop":-461,"marginBottom":365,"minHeight":96}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="118" height="96" viewBox="0 0 118 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="59" cy="48" rx="59" ry="48" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":20}} className="outerDiv">
          <View
            id="1224:7059"
            style={{"marginLeft":264,"width":135,"minWidth":135,"height":null,"marginTop":-448,"marginBottom":381,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>journaling </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":9}} className="outerDiv">
          <View
            id="1224:7046"
            style={{"marginLeft":132,"width":147,"minWidth":147,"height":null,"marginTop":-413,"marginBottom":303,"minHeight":110}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="147" height="110" viewBox="0 0 147 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="73.5" cy="55" rx="73.5" ry="55" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":21}} className="outerDiv">
          <View
            id="1224:7060"
            style={{"marginLeft":138,"width":135,"minWidth":135,"height":null,"marginTop":-392,"marginBottom":325,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>sleep </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":11}} className="outerDiv">
          <View
            id="1224:7048"
            style={{"marginLeft":44,"width":88,"minWidth":88,"height":null,"marginTop":-365,"marginBottom":276,"minHeight":89}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="88" height="89" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="44" cy="44.5" rx="44" ry="44.5" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":22}} className="outerDiv">
          <View
            id="1224:7061"
            style={{"marginLeft":21,"width":135,"minWidth":135,"height":null,"marginTop":-358,"marginBottom":291,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>hobbies </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":12}} className="outerDiv">
          <View
            id="1224:7049"
            style={{"marginLeft":254,"width":120,"minWidth":120,"height":null,"marginTop":-326,"marginBottom":233,"minHeight":93}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="120" height="93" viewBox="0 0 120 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="60" cy="46.5" rx="60" ry="46.5" fill="#E9E9E9"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":23}} className="outerDiv">
          <View
            id="1224:7062"
            style={{"marginLeft":246,"width":135,"minWidth":135,"height":null,"marginTop":-313,"marginBottom":246,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>Steps </Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":13}} className="outerDiv">
          <View
            id="1224:7050"
            style={{"marginLeft":120,"width":134,"minWidth":134,"height":null,"marginTop":-290,"marginBottom":157,"minHeight":133}}
            className="innerDiv"
          >
            <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="134" height="133" viewBox="0 0 134 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="67" cy="66.5" rx="67" ry="66.5" fill="#9DD0FF"/>
</svg>
`}} />
          </View>
        </View>
        <View style={{"zIndex":24}} className="outerDiv">
          <View
            id="1224:7063"
            style={{"marginLeft":120,"width":135,"minWidth":135,"height":null,"marginTop":-257,"marginBottom":190,"minHeight":67,"color":"rgba(43, 43, 43, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"75.5905532836914%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="7"><Text>healthy</Text></span>
              <br key="br7" />
              <span style={{}} key="end"><Text>eating</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":25}} className="outerDiv">
          <View
            id="1224:7065"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 131, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7066"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":8,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="24"><Text>Generate Healthy Habits </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="26"><Text>  </Text></span>
                    <span style={{}} key="27"><Text> </Text></span>
                    <span style={{"fontSize":20,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="28"><Text>�</Text></span>
                    <span style={{}} key="end"><Text>�</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1224:6967"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:6968"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:6969"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:6970"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:6971"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionHoursofSleep1224D6918 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:6924"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6924;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:6924;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6924;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6924;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:6924;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:6924;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:6925"
            style={{"marginLeft":25,"width":401,"minWidth":401,"height":null,"marginTop":-574,"marginBottom":466,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>How much sleep do you get week?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1257:6870"
            style={{"marginLeft":27,"width":305,"minWidth":305,"height":null,"marginTop":-447,"marginBottom":401,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1257:6871"
                  style={{"marginLeft":16,"width":277,"minWidth":277,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1257:6872"
                        style={{"marginLeft":0,"width":236,"minWidth":236,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="1257:6873"
                              style={{"marginLeft":0,"width":220,"minWidth":220,"height":22,"marginTop":0,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>Enter full name</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1257:6874"
                        style={{"width":"11.913357400722022%","marginLeft":"88.08664259927798%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv maxer">
                <View
                  id="1257:6870"
                  style={{"marginLeft":27,"width":"100%","minWidth":305,"height":null,"marginTop":-447,"marginBottom":401,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1257:6876"
                      style={{"width":277,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="277" height="1" viewBox="0 0 277 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="277" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6851"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6851;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1224:6919"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:6920"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:6921"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:6922"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:6923"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionActivityLevel1223D6894 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1223:6900"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6900;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1223:6900;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6900;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6900;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6900;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1223:6900;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1223:6901"
            style={{"marginLeft":27,"width":401,"minWidth":401,"height":null,"marginTop":-567,"marginBottom":463,"minHeight":104,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>How active are you in a week?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1223:6954"
            style={{"marginLeft":15,"width":383,"minWidth":383,"height":null,"marginTop":-515,"marginBottom":369,"minHeight":146,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1223:6955"
                  style={{"marginLeft":60,"width":264,"minWidth":264,"height":null,"marginTop":50,"marginBottom":82,"minHeight":14,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1223:6955;151:6963"
                        style={{"marginLeft":16,"marginRight":16,"flexGrow":1,"marginTop":8,"marginBottom":-22,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"zIndex":1}} className="outerDiv">
                            <View
                              id="I1223:6955;151:6965"
                              style={{"marginLeft":0,"width":128.010009765625,"minWidth":128.010009765625,"height":null,"marginTop":12,"marginBottom":12,"minHeight":4,"backgroundColor":"rgba(10, 132, 255, 1)"}}
                              className="innerDiv"
                            >
                              <View>
                                <View style={{"alignItems":"center"}} className="outerDiv centerer">
                                  <View
                                    id="I1223:6955;151:6966"
                                    style={{"marginLeft":0,"marginRight":128,"flexGrow":1,"height":4,"marginTop":0}}
                                    className="innerDiv"
                                  >
                                    <View>
                                    </View>
                                  </View>
                                </View>
                                <View style={{"zIndex":1,"justifyContent":"flex-end","alignItems":"center"}} className="outerDiv centerer">
                                  <View
                                    id="I1223:6955;151:6967"
                                    style={{"marginRight":0,"width":28,"minWidth":28,"height":28,"marginTop":0}}
                                    className="innerDiv"
                                  >
                                    <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_173)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 35C34.732 35 41 28.732 41 21C41 13.268 34.732 7 27 7C19.268 7 13 13.268 13 21C13 28.732 19.268 35 27 35Z" fill="white"/>
</g>
<defs>
<filter id="filter0_dd_0_173" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="6.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_173"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.5"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_173" result="effect2_dropShadow_0_173"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_173" result="shape"/>
</filter>
</defs>
</svg>
`}} />
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="I1223:6955;151:6964"
                              style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"height":4,"marginTop":0,"backgroundColor":"rgba(120, 120, 128, 1)","opacity":0.36000001430511475}}
                              className="innerDiv"
                            >
                              <View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1223:6996"
                  style={{"marginLeft":-10,"width":173,"minWidth":173,"height":null,"marginTop":-60,"marginBottom":20,"minHeight":40,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>0-1 hours</Text></span>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":2}} className="outerDiv">
                <View
                  id="1224:6917"
                  style={{"marginLeft":222,"width":173,"minWidth":173,"height":null,"marginTop":-56,"marginBottom":16,"minHeight":40,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>12+  hours</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6849"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6849;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1223:6895"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1223:6896"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6897"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1223:6898"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6899"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionSex1224D6996 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1224:7002"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7002;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1224:7002;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7002;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7002;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1224:7002;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1224:7002;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1224:7003"
            style={{"marginLeft":46,"width":401,"minWidth":401,"height":null,"marginTop":-574,"marginBottom":466,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>What is your sex?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1224:7028"
            style={{"marginLeft":40,"marginRight":244.51495361328125,"flexGrow":1,"height":null,"marginTop":-466,"marginBottom":427,"minHeight":39,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7029"
                  style={{"marginLeft":0,"width":145,"minWidth":145,"height":null,"marginTop":8,"marginBottom":0,"minHeight":31,"color":"rgba(171, 176, 188, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Male</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1224:7030"
            style={{"marginLeft":243.51495361328125,"marginRight":41,"flexGrow":1,"height":null,"marginTop":-466,"marginBottom":427,"minHeight":39,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:7031"
                  style={{"marginLeft":0.485107421875,"width":145,"minWidth":145,"height":null,"marginTop":8,"marginBottom":0,"minHeight":31,"color":"rgba(171, 176, 188, 1)","fontSize":20,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Female</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1244:6847"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6847;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1224:6997"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1224:6998"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:6999"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1224:7000"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1224:7001"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionWeight1223D6864 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1223:6870"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6870;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1223:6870;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6870;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6870;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6870;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1223:6870;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1223:6871"
            style={{"marginLeft":27,"width":401,"minWidth":401,"height":null,"marginTop":-566,"marginBottom":458,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>How much do you weigh?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1257:6863"
            style={{"marginLeft":29,"width":305,"minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1257:6864"
                  style={{"marginLeft":16,"width":277,"minWidth":277,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1257:6865"
                        style={{"marginLeft":0,"width":236,"minWidth":236,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="1257:6866"
                              style={{"marginLeft":0,"width":220,"minWidth":220,"height":22,"marginTop":0,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>Enter full name</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1257:6867"
                        style={{"width":"11.913357400722022%","marginLeft":"88.08664259927798%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv maxer">
                <View
                  id="1257:6863"
                  style={{"marginLeft":29,"width":"100%","minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1257:6869"
                      style={{"width":277,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="277" height="1" viewBox="0 0 277 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="277" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6843"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6843;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1223:6865"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1223:6866"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6867"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1223:6868"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6869"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionHeight1223D6834 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1223:6840"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6840;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1223:6840;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6840;839:7142"
                  style={{"width":27.40119171142578,"marginLeft":309.4011917114258,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6840;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6840;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1223:6840;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1223:6841"
            style={{"marginLeft":29,"width":372,"minWidth":372,"height":null,"marginTop":-566,"marginBottom":458,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>How tall are you?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1257:6856"
            style={{"marginLeft":27,"width":119,"minWidth":119,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1257:6857"
                  style={{"marginLeft":16,"width":91,"minWidth":91,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1257:6858"
                        style={{"marginLeft":0,"width":50,"minWidth":50,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{}} className="outerDiv">
                            <View
                              id="1257:6859"
                              style={{"marginLeft":0,"width":34,"minWidth":34,"height":null,"marginTop":11,"marginBottom":11,"minHeight":22,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>ft</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1257:6860"
                        style={{"width":"36.26373626373626%","marginLeft":"63.73626373626374%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv maxer">
                <View
                  id="1257:6856"
                  style={{"marginLeft":27,"width":"100%","minWidth":119,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1257:6862"
                      style={{"width":91,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="91" height="1" viewBox="0 0 91 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="91" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1257:6883"
            style={{"marginLeft":223,"width":119,"minWidth":119,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1257:6884"
                  style={{"marginLeft":16,"width":91,"minWidth":91,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1257:6885"
                        style={{"marginLeft":0,"width":50,"minWidth":50,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{}} className="outerDiv">
                            <View
                              id="1257:6886"
                              style={{"marginLeft":0,"width":34,"minWidth":34,"height":null,"marginTop":11,"marginBottom":11,"minHeight":22,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>in</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1257:6887"
                        style={{"width":"36.26373626373626%","marginLeft":"63.73626373626374%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":5}} className="outerDiv maxer">
                <View
                  id="1257:6883"
                  style={{"marginLeft":223,"width":"100%","minWidth":119,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1257:6889"
                      style={{"width":91,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="91" height="1" viewBox="0 0 91 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="91" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":6}} className="outerDiv">
          <View
            id="1257:6890"
            style={{"marginLeft":134,"width":64,"minWidth":64,"height":null,"marginTop":-455,"marginBottom":415,"minHeight":40,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>ft</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":7}} className="outerDiv">
          <View
            id="1257:6891"
            style={{"marginLeft":334,"width":64,"minWidth":64,"height":null,"marginTop":-455,"marginBottom":415,"minHeight":40,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"110.86614608764648%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>in</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6841"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6841;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1223:6835"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1223:6836"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6837"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1223:6838"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6839"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionBirthday1223D6804 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1223:6810"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6810;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1223:6810;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6810;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6810;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1223:6810;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1223:6810;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79944 2.14875 4.79944 4.79934C4.79944 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1223:6811"
            style={{"marginLeft":29,"width":372,"minWidth":372,"height":null,"marginTop":-566,"marginBottom":458,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>What’s your birthday?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1257:6849"
            style={{"marginLeft":29,"width":305,"minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1257:6850"
                  style={{"marginLeft":16,"width":277,"minWidth":277,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1257:6851"
                        style={{"marginLeft":0,"width":236,"minWidth":236,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="1257:6852"
                              style={{"marginLeft":0,"width":220,"minWidth":220,"height":22,"marginTop":0,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>mm/dd/yyyy</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1257:6853"
                        style={{"width":"11.913357400722022%","marginLeft":"88.08664259927798%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv maxer">
                <View
                  id="1257:6849"
                  style={{"marginLeft":29,"width":"100%","minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1257:6855"
                      style={{"width":277,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="277" height="1" viewBox="0 0 277 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="277" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6839"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1244:6839;1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1223:6805"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1223:6806"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6807"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1223:6808"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1223:6809"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CQuestionName1215D6900 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1215:6906"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6906;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1215:6906;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6906;839:7142"
                  style={{"width":27.40118408203125,"marginLeft":309.40118408203125,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6906;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1215:6906;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1215:6906;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1215:6909"
            style={{"marginLeft":29,"width":372,"minWidth":372,"height":null,"marginTop":-566,"marginBottom":458,"minHeight":108,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="end"><Text>What’s your name?</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1252:6967"
            style={{"marginLeft":29,"width":305,"minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1252:6968"
                  style={{"marginLeft":16,"width":277,"minWidth":277,"height":null,"marginTop":0,"marginBottom":2,"minHeight":44,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv">
                      <View
                        id="1252:6969"
                        style={{"marginLeft":0,"width":236,"minWidth":236,"height":null,"marginTop":0,"marginBottom":0,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <View>
                          <View style={{"alignItems":"center"}} className="outerDiv centerer">
                            <View
                              id="1252:6970"
                              style={{"marginLeft":0,"width":220,"minWidth":220,"height":22,"marginTop":0,"color":"rgba(60, 60, 67, 1)","fontSize":17,"fontWeight":400,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"124.43439483642578%","letterSpacing":"-0.40799999237060547px"}}
                              className="innerDiv"
                            >
                              <View>
                                <span style={{}} key="end"><Text>Enter full name</Text></span>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{"zIndex":1}} className="outerDiv centerer">
                      <View
                        id="1252:6971"
                        style={{"width":"11.913357400722022%","marginLeft":"88.08664259927798%","height":"38.63636363636363%","top":"30.681818181818183%"}}
                        className="innerDiv"
                      >
                        <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 17C13.1944 17 17 13.1943 17 8.5C17 3.80566 13.1944 0 8.5 0C3.80557 0 0 3.80566 0 8.5C0 13.1943 3.80557 17 8.5 17ZM12.2657 4.73438C12.5781 5.04663 12.5781 5.55322 12.2657 5.86572L9.63138 8.5L12.2657 11.1343C12.5781 11.4468 12.5781 11.9534 12.2657 12.2656C11.9533 12.5781 11.4467 12.5781 11.1343 12.2656L8.5 9.63135L5.86569 12.2656C5.55328 12.5781 5.04675 12.5781 4.73431 12.2656C4.42191 11.9534 4.42191 11.4468 4.73431 11.1343L7.36862 8.5L4.73431 5.86572C4.42191 5.55322 4.42191 5.04663 4.73431 4.73438C5.04672 4.42188 5.55325 4.42188 5.86569 4.73438L8.5 7.36865L11.1343 4.73438C11.4467 4.42188 11.9533 4.42188 12.2657 4.73438Z" fill="#8E8E93"/>
</svg>
`}} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3}} className="outerDiv maxer">
                <View
                  id="1252:6967"
                  style={{"marginLeft":29,"width":"100%","minWidth":305,"height":null,"marginTop":-458,"marginBottom":412,"minHeight":46,"backgroundColor":null,"pointerEvents":"none"}}
                  className="innerDiv"
                >
                  <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                    <View
                      id="1252:6973"
                      style={{"width":277,"marginLeft":4,"marginTop":44,"marginBottom":2,"height":null}}
                      className="innerDiv"
                    >
                      <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="277" height="1" viewBox="0 0 277 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.25" x2="277" y2="0.25" stroke="#3C3C43" stroke-opacity="0.36" stroke-width="0.5"/>
</svg>
`}} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1244:6837"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-136,"marginBottom":96,"minHeight":40,"backgroundColor":"rgba(74, 130, 184, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="1244:6838"
                  style={{"marginLeft":23,"marginRight":23,"flexGrow":1,"marginTop":8,"marginBottom":8,"color":"rgba(255, 255, 255, 1)","fontSize":20,"fontWeight":500,"fontFamily":"IBM Plex Mono","textAlign":"LEFT","fontStyle":"normal","lineHeight":"105.76923370361328%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Continue              🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1215:6901"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1215:6902"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6903"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1215:6904"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1215:6905"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class CLandingPage1218D6818 extends PureComponent {
  render() {
    return (
      <View>
        <View style={{"zIndex":1}} className="outerDiv">
          <View
            id="1218:6824"
            style={{"marginLeft":19,"width":390,"minWidth":390,"height":null,"marginTop":0,"marginBottom":885,"minHeight":47,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6824;839:7140"
                  style={{"width":54,"marginLeft":-282,"height":null,"marginTop":14,"marginBottom":12,"minHeight":21,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="I1218:6824;839:7140;839:7100"
                        style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":1,"marginBottom":0,"color":"rgba(1, 1, 1, 1)","fontSize":17,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"138.03921699523926%","letterSpacing":"-0.40799999237060547px"}}
                        className="innerDiv"
                      >
                        <View>
                          <span style={{}} key="end"><Text>9:41</Text></span>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6824;839:7142"
                  style={{"width":27.4012451171875,"marginLeft":309.4012451171875,"height":null,"marginTop":-28,"marginBottom":15,"minHeight":13}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" d="M0.527543 4C0.527543 2.08221 2.08221 0.527543 4 0.527543H21C22.9178 0.527543 24.4725 2.08222 24.4725 4V9C24.4725 10.9178 22.9178 12.4725 21 12.4725H4C2.08222 12.4725 0.527543 10.9178 0.527543 9V4Z" stroke="black" stroke-width="1.05509"/>
<path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="black"/>
<path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":4,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6824;839:7146"
                  style={{"width":17,"marginLeft":251,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50047 2.58753C10.967 2.58764 13.3393 3.55505 15.1269 5.28982C15.2615 5.42375 15.4766 5.42206 15.6092 5.28603L16.896 3.96045C16.9631 3.89146 17.0006 3.798 17 3.70076C16.9994 3.60353 16.9609 3.51052 16.893 3.44234C12.2011 -1.14745 4.79908 -1.14745 0.107163 3.44234C0.0391973 3.51047 0.000634479 3.60345 7.75932e-06 3.70069C-0.00061896 3.79792 0.0367421 3.89141 0.103824 3.96045L1.39096 5.28603C1.52346 5.42226 1.73878 5.42396 1.87331 5.28982C3.66116 3.55494 6.03367 2.58752 8.50047 2.58753ZM8.53591 6.67235C9.89112 6.67227 11.198 7.18644 12.2025 8.11497C12.3384 8.24674 12.5524 8.24389 12.6849 8.10853L13.9702 6.78295C14.0379 6.71342 14.0754 6.61909 14.0744 6.52108C14.0735 6.42306 14.034 6.32954 13.965 6.26142C10.9059 3.35683 6.16853 3.35683 3.10945 6.26142C3.04035 6.32953 3.00092 6.42311 3.00002 6.52115C2.99911 6.6192 3.0368 6.71352 3.10462 6.78295L4.38954 8.10853C4.52199 8.24389 4.73602 8.24674 4.87189 8.11497C5.87578 7.18706 7.18159 6.67293 8.53591 6.67235ZM11.1496 9.34267C11.1515 9.44096 11.1137 9.53573 11.0449 9.60459L8.82165 11.8948C8.75648 11.9621 8.66762 12 8.57491 12C8.4822 12 8.39334 11.9621 8.32817 11.8948L6.10452 9.60459C6.03583 9.53568 5.99804 9.44088 6.00008 9.34259C6.00212 9.2443 6.0438 9.15123 6.11528 9.08534C7.53515 7.8595 9.61467 7.8595 11.0345 9.08534C11.106 9.15128 11.1476 9.24438 11.1496 9.34267Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{"zIndex":5,"justifyContent":"center"}} className="outerDiv">
                <View
                  id="I1218:6824;839:7150"
                  style={{"width":18,"marginLeft":200,"height":null,"marginTop":-27,"marginBottom":15,"minHeight":12}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="black"/>
<path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="black"/>
<path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="black"/>
<path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
              <View style={{}} className="outerDiv centerer">
                <View
                  id="I1218:6824;839:7137"
                  style={{"marginLeft":113,"marginRight":113,"flexGrow":1,"marginTop":-2,"marginBottom":17}}
                  className="innerDiv"
                >
                  <View className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="164" height="32" viewBox="0 0 164 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.76826 0H159.184V15C159.184 24.3888 151.572 32 142.184 32H21.7682C12.3794 32 4.76826 24.3888 4.76826 15V0Z" fill="black"/>
<path d="M5.00001 0H1.05519e-05C-2.6001e-05 0 4.71047e-05 0 1.05519e-05 0C2.6506 0 4.79945 2.14875 4.79945 4.79934C4.79945 4.86656 4.79806 4.93345 4.79533 5H5.00001V0Z" fill="black"/>
<path d="M159 0H164C164 0 164 0 164 0C161.349 0 159.201 2.14875 159.201 4.79934C159.201 4.86656 159.202 4.93345 159.205 5H159V0Z" fill="black"/>
</svg>
`}} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":2}} className="outerDiv">
          <View
            id="1218:6842"
            style={{"marginLeft":5,"width":420,"minWidth":420,"height":null,"marginTop":-740,"marginBottom":642,"minHeight":98,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6843"
                  style={{"marginLeft":72,"width":276,"minWidth":276,"height":null,"marginTop":34,"marginBottom":34,"minHeight":30,"color":"rgba(255, 255, 255, 1)","fontSize":64,"fontWeight":400,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"47.24409580230713%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{"fontSize":64,"fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="3"><Text>Tri</Text></span>
                    <span style={{"fontSize":64,"fontWeight":700,"fontFamily":"Kumbh Sans","fontStyle":"normal","lineHeight":"NaN%","letterSpacing":"undefinedpx"}} key="end"><Text>Health</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":3}} className="outerDiv">
          <View
            id="1218:6844"
            style={{"marginLeft":73,"width":326,"minWidth":326,"height":null,"marginTop":-613,"marginBottom":496,"minHeight":117,"color":"rgba(255, 255, 255, 1)","fontSize":32,"fontWeight":700,"fontFamily":"Kumbh Sans","textAlign":"LEFT","fontStyle":"normal","lineHeight":"94.48819160461426%","letterSpacing":"-0.40799999237060547px"}}
            className="innerDiv"
          >
            <View>
              <span style={{}} key="4"><Text>me, </Text></span>
              <br/>
              <span style={{}} key="15"><Text>my health,</Text></span>
              <br/>
              <span style={{}} key="end"><Text>& I</Text></span>
            </View>
          </View>
        </View>
        <View style={{"zIndex":4}} className="outerDiv">
          <View
            id="1218:6849"
            style={{"marginLeft":50,"width":328,"minWidth":328,"height":null,"marginTop":-263,"marginBottom":213,"minHeight":50,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6850"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":18,"minHeight":24,"color":"rgba(108, 168, 223, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Login</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{"zIndex":5}} className="outerDiv">
          <View
            id="1218:6851"
            style={{"marginLeft":51,"width":328,"minWidth":328,"height":null,"marginTop":-196,"marginBottom":146,"minHeight":50,"backgroundColor":"rgba(108, 168, 223, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6852"
                  style={{"marginLeft":23,"width":282,"minWidth":282,"height":null,"marginTop":8,"marginBottom":18,"minHeight":24,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Kumbh Sans","textAlign":"CENTER","fontStyle":"normal","lineHeight":"83.98950576782227%","letterSpacing":"-0.40799999237060547px"}}
                  className="innerDiv"
                >
                  <View>
                    <span style={{}} key="end"><Text>Sign Up 🡆</Text></span>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{}} className="outerDiv">
          <View
            id="1218:6819"
            style={{"marginLeft":-5,"width":439,"minWidth":439,"height":null,"marginTop":-82,"marginBottom":-82,"minHeight":164}}
            className="innerDiv"
          >
            <View>
              <View style={{}} className="outerDiv">
                <View
                  id="1218:6820"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":32,"marginBottom":98,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6821"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(0, 0, 0, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{"zIndex":1}} className="outerDiv">
                <View
                  id="1218:6822"
                  style={{"marginLeft":32,"width":375,"minWidth":375,"height":null,"marginTop":-66,"marginBottom":32,"minHeight":34,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <View>
                    <View style={{}} className="outerDiv centerer">
                      <View
                        id="1218:6823"
                        style={{"marginLeft":121,"marginRight":120,"flexGrow":1,"marginTop":21,"marginBottom":8,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                        className="innerDiv"
                      >
                        <View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

