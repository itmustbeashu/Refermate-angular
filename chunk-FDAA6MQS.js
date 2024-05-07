import{a as k,b as A}from"./chunk-CWSGKHNZ.js";import"./chunk-JFQD6ARE.js";import{Aa as n,B as _,Ba as y,Ca as v,Da as P,G as C,H as M,L as f,M as x,V as O,Y as l,Ya as w,Za as S,cb as N,fa as h,ha as s,ia as b,la as e,ma as t,mb as I,na as m,ra as u,ta as g,ua as d}from"./chunk-7YMRFQ7U.js";var z=[{profileImage:"avatar2.png",firstName:"John",lastName:"Smith",requestedApplicants:8,services:2,company:"TCS"},{profileImage:"avatar5.png",firstName:"Emma",lastName:"Johnson",requestedApplicants:12,services:3,company:"Microsoft"},{profileImage:"avatar9.png",firstName:"Alice",lastName:"Brown",requestedApplicants:5,services:1,company:"Google"},{profileImage:"avatar3.png",firstName:"Bob",lastName:"Williams",requestedApplicants:9,services:2,company:"Amazon"},{profileImage:"avatar8.png",firstName:"Sophia",lastName:"Jones",requestedApplicants:14,services:3,company:"Facebook"},{profileImage:"avatar1.png",firstName:"Liam",lastName:"Davis",requestedApplicants:7,services:1,company:"TCS"},{profileImage:"avatar6.png",firstName:"Olivia",lastName:"Miller",requestedApplicants:10,services:2,company:"IBM"},{profileImage:"avatar7.png",firstName:"Charlie",lastName:"Wilson",requestedApplicants:3,services:3,company:"Oracle"},{profileImage:"avatar4.png",firstName:"Noah",lastName:"Martinez",requestedApplicants:6,services:1,company:"Apple"},{profileImage:"avatar10.png",firstName:"Jane",lastName:"Anderson",requestedApplicants:11,services:2,company:"Intel"},{profileImage:"avatar2.png",firstName:"John",lastName:"Taylor",requestedApplicants:8,services:2,company:"Cisco"},{profileImage:"avatar5.png",firstName:"Emma",lastName:"Hernandez",requestedApplicants:12,services:3,company:"Adobe"},{profileImage:"avatar9.png",firstName:"Alice",lastName:"King",requestedApplicants:5,services:1,company:"HP"},{profileImage:"avatar3.png",firstName:"Bob",lastName:"White",requestedApplicants:9,services:2,company:"Dell"},{profileImage:"avatar8.png",firstName:"Sophia",lastName:"Lee",requestedApplicants:14,services:3,company:"SAP"},{profileImage:"avatar1.png",firstName:"Liam",lastName:"Clark",requestedApplicants:7,services:1,company:"NVIDIA"},{profileImage:"avatar6.png",firstName:"Olivia",lastName:"Hall",requestedApplicants:10,services:2,company:"Accenture"},{profileImage:"avatar7.png",firstName:"Charlie",lastName:"Lopez",requestedApplicants:3,services:3,company:"VMware"},{profileImage:"avatar4.png",firstName:"Noah",lastName:"Scott",requestedApplicants:6,services:1,company:"Broadcom"},{profileImage:"avatar10.png",firstName:"Jane",lastName:"Green",requestedApplicants:11,services:2,company:"Netflix"},{profileImage:"avatar2.png",firstName:"John",lastName:"Adams",requestedApplicants:8,services:2,company:"Paypal"},{profileImage:"avatar5.png",firstName:"Emma",lastName:"Baker",requestedApplicants:12,services:3,company:"eBay"},{profileImage:"avatar9.png",firstName:"Alice",lastName:"Evans",requestedApplicants:5,services:1,company:"Uber"},{profileImage:"avatar3.png",firstName:"Bob",lastName:"Hill",requestedApplicants:9,services:2,company:"TCS"},{profileImage:"avatar8.png",firstName:"Sophia",lastName:"Cooper",requestedApplicants:14,services:3,company:"LinkedIn"},{profileImage:"avatar1.png",firstName:"Liam",lastName:"Nelson",requestedApplicants:7,services:1,company:"Slack"},{profileImage:"avatar6.png",firstName:"Olivia",lastName:"Carter",requestedApplicants:10,services:2,company:"Airbnb"},{profileImage:"avatar7.png",firstName:"Charlie",lastName:"Mitchell",requestedApplicants:3,services:3,company:"Dropbox"},{profileImage:"avatar4.png",firstName:"Noah",lastName:"Perez",requestedApplicants:6,services:1,company:"Atlassian"},{profileImage:"avatar10.png",firstName:"Jane",lastName:"Roberts",requestedApplicants:11,services:2,company:"Infosys"}];function F(i,r){if(i&1&&(e(0,"div",19),n(1),t()),i&2){let o=r.$implicit;b("background-color",o.color),l(),v(" ",o.company," ")}}function j(i,r){if(i&1&&(e(0,"div",20)(1,"div",21)(2,"div",22),m(3,"img",23),t(),e(4,"div",24)(5,"span",2),n(6),t()(),e(7,"div",24)(8,"span",25),n(9),t()()(),e(10,"div",26)(11,"div",27)(12,"div",28),n(13,"Total Applicant Requested"),t(),e(14,"div",29),n(15),t()(),e(16,"div",30)(17,"div",28),n(18,"Total Services Offered"),t(),e(19,"div",29),n(20),t()()(),e(21,"div",31)(22,"button",32),n(23,"Exchange"),t()()()),i&2){let o=r.$implicit,c=d(2);l(3),s("src","assets/images/"+o.profileImage,O),l(3),P("",o.firstName," ",o.lastName,""),l(2),b("background-color",c.generateRandomColors()),l(),v(" ",o.company,""),l(6),y(o.requestedApplicants),l(5),v(" ",o.services,"")}}function L(i,r){if(i&1&&(e(0,"div",14)(1,"div",2),n(2,"Results"),t(),e(3,"div",15),h(4,F,2,3,"div",16),t(),e(5,"div",17),h(6,j,24,8,"div",18),t()()),i&2){let o=d();l(4),s("ngForOf",o.filterObj),l(2),s("ngForOf",o.data)}}function D(i,r){if(i&1){let o=u();e(0,"div")(1,"div",33),g("click",function(){f(o);let a=d();return x(a.toggleMobFilter())}),e(2,"span"),n(3,"Filter"),t(),e(4,"span"),m(5,"i",34),t()()()}}function V(i,r){if(i&1){let o=u();e(0,"div")(1,"div",33),g("click",function(){f(o);let a=d();return x(a.toggleMobFilter())}),m(2,"i",35),t(),e(3,"div",4)(4,"div"),n(5,"Organisation you "),e(6,"b"),n(7,"Can Refer:"),t()(),e(8,"div"),m(9,"input",5),t()(),e(10,"div",4)(11,"div"),n(12,"Organisation you "),e(13,"b",6),n(14,"Want Referral:"),t()(),e(15,"div",7)(16,"ng-multiselect-dropdown",8),g("onSelect",function(a){f(o);let p=d();return x(p.onItemSelect(a))}),t()()(),e(17,"div",9)(18,"button",10),g("click",function(){f(o);let a=d();return x(a.onSearch())}),n(19,"Search"),t()()()}if(i&2){let o=d();l(16),s("placeholder","Select Organisation")("settings",o.dropdownSettings)("data",o.dropdownList)}}var E=(()=>{let r=class r{constructor(){this.filterObj=[],this.showResult=!1,this.colorIndex=0,this.dropdownList=[],this.selectedItems=[],this.mobFilterToggle=!1,this.data=z,this.dropdownSettings={singleSelection:!1,idField:"itemId",textField:"company",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}ngOnInit(){this.dropdownList=[{itemId:1,company:"TCS"},{itemId:2,company:"HCL"},{itemId:3,company:"Deliotte"},{itemId:4,company:"KPMG"},{itemId:5,company:"EY"},{itemId:5,company:"PWC"},{itemId:5,company:"CISCO"},{itemId:5,company:"MICROSOFT"},{itemId:5,company:"Amazon"},{itemId:5,company:"Google"},{itemId:5,company:"Dell"}]}onItemSelect(c){this.filterObj.push({company:c.company,color:this.generateRandomColors()})}generateRandomColors(){let c="0123456789ABCDEF",a="#";for(let p=0;p<6;p++)a+=c[Math.floor(Math.random()*16)];return a}onSearch(){this.showResult=!0}toggleMobFilter(){this.mobFilterToggle=!this.mobFilterToggle}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=C({type:r,selectors:[["app-exchange-referral"]],decls:26,vars:6,consts:[[1,"body-content"],[1,"main-content-div"],[1,"heading-text"],[1,"filter-div"],[1,"filter-referral-div"],["type","text","value","Infosys Pvt. Ltd.","disabled","",1,"input-box-1","referral-input-box"],[1,"primary-blue"],[1,"referral-multiselect-box"],[3,"onSelect","placeholder","settings","data"],[1,"filter-search-div","d-flex","align-items-center","justify-content-center"],[1,"blue-btn","search-btn","blue-btn-gradient",3,"click"],["class","result mt-3",4,"ngIf"],[1,"mobile-bottom-filter"],[4,"ngIf"],[1,"result","mt-3"],[1,"d-flex"],["class","applied-filters",3,"background-color",4,"ngFor","ngForOf"],[1,"mt-2","d-flex","flex-wrap-wrap"],["class","referral-person-box box-shadow",4,"ngFor","ngForOf"],[1,"applied-filters"],[1,"referral-person-box","box-shadow"],[1,"referral-top"],[1,"referral-box-img"],["alt","Profile Image",1,"br-100","img-set",3,"src"],[1,"d-flex","justify-content-center","margin-top-3"],[1,"company-tag"],[1,"referral-middle"],[1,"w-100","d-flex","light-bottom-border"],[1,"flex-grow-1","small-text-light-1"],[1,"small-text-light-1"],[1,"w-100","d-flex","mt-2","cursor-pointer","light-bottom-border"],[1,"referral-bottom"],[1,"request-referral-btn","w-100"],[1,"center-element",3,"click"],["aria-hidden","true",1,"pl-2","fa","fa-arrow-up"],["aria-hidden","true",1,"fa","fa-arrow-down"]],template:function(a,p){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),n(3,"Exchange Referral"),t(),e(4,"div",3)(5,"div",4)(6,"div"),n(7,"Organisation you "),e(8,"b"),n(9,"Can Refer:"),t()(),e(10,"div"),m(11,"input",5),t()(),e(12,"div",4)(13,"div"),n(14,"Organisation you "),e(15,"b",6),n(16,"Want Referral:"),t()(),e(17,"div",7)(18,"ng-multiselect-dropdown",8),g("onSelect",function(T){return p.onItemSelect(T)}),t()()(),e(19,"div",9)(20,"button",10),g("click",function(){return p.onSearch()}),n(21,"Search"),t()()(),h(22,L,7,2,"div",11),t()(),e(23,"div",12),h(24,D,6,0,"div",13)(25,V,20,3,"div",13),t()),a&2&&(l(18),s("placeholder","Select Organisation")("settings",p.dropdownSettings)("data",p.dropdownList),l(4),s("ngIf",p.showResult),l(2),s("ngIf",!p.mobFilterToggle),l(),s("ngIf",p.mobFilterToggle))},dependencies:[w,S,k],styles:['.cdk-overlay-container[_ngcontent-%COMP%]{bottom:0!important;left:15%;top:12%!important;position:fixed!important;width:70%!important;height:80%}.cdk-overlay-pane.mat-mdc-dialog-panel[_ngcontent-%COMP%]{max-width:var(--mat-dialog-container-max-width, 100vw)!important}.cdk-overlay-pane[_ngcontent-%COMP%], .mat-mdc-dialog-panel[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{height:100%}.body-content[_ngcontent-%COMP%]{padding-left:20%;padding-bottom:100px}.body-content-sidenav-collapsed[_ngcontent-%COMP%]{padding-left:5%;padding-bottom:100px}.heading-text[_ngcontent-%COMP%]{font-weight:700;line-height:18px;font-size:22px}.sub-text-2[_ngcontent-%COMP%]{font-weight:500;line-height:18px;font-size:10px}.small-text-1[_ngcontent-%COMP%]{color:var(--primary-dark);font-size:14px;font-weight:700;line-height:18px;margin-bottom:6px;padding-top:0}.sub-text[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:18px}.small-text-light-1[_ngcontent-%COMP%]{font-size:12px;font-weight:500;letter-spacing:1;color:#929292}.small-text-light-2[_ngcontent-%COMP%]{font-size:10px;color:#929292}.small-text-2[_ngcontent-%COMP%]{font-size:10px;font-weight:500}.small-text-3[_ngcontent-%COMP%]{font-size:14px;letter-spacing:.2;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif}.small-text-4[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.small-text-5[_ngcontent-%COMP%]{font-size:16px;letter-spacing:.2;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif}.large-txt-1[_ngcontent-%COMP%]{font-size:50px;font-weight:600}.title-text-1[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:16px}.title-text-2[_ngcontent-%COMP%]{font-weight:700;font-size:16px}.title-text-3[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.text-1[_ngcontent-%COMP%]{font-weight:500;font-size:15px}.sub-menu-text[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:#767676}.button-text-1[_ngcontent-%COMP%]{font-size:12px;font-weight:700;letter-spacing:.06em}.default-black-color[_ngcontent-%COMP%]{color:var(--primary-dark)}.main-color[_ngcontent-%COMP%]{background-color:var(--primary-dark)}.dark-light-1[_ngcontent-%COMP%]{color:var(--dark-light-1)}.orange-color[_ngcontent-%COMP%]{color:var(--color-orange)}.bg-light[_ngcontent-%COMP%]{background-color:#f1f1f1}.bg-eee[_ngcontent-%COMP%]{background-color:#eee}.black-btn[_ngcontent-%COMP%]{background-color:var(--primary-dark);border-radius:4px;color:var(--white);border:none}.blue-btn[_ngcontent-%COMP%]{background-color:var(--blue-menu-active);border-radius:4px;color:var(--white);border:none}.white-btn[_ngcontent-%COMP%]{background-color:var(--white);border-radius:8px;color:var(--dark-light-1);border:none;border:1px solid var(--color-light-ddd)}.white-grey-btn[_ngcontent-%COMP%]{color:var(--dark-light-1);background-color:var(--white);border:1px solid var(--color-light-ddd);border-radius:4px}.light-3-btn[_ngcontent-%COMP%]{border-radius:4px;border:1px solid var(--primary-light-3);color:var(--primary-light-3);background-color:var(--white)}.black-btn-gradient[_ngcontent-%COMP%]{background-image:linear-gradient(140deg,var(--primary-dark) 19%,var(--primary-light-3) 75%)}.blue-btn-gradient[_ngcontent-%COMP%]{background-image:linear-gradient(140deg,var(--primary-blue) 25%,var(--primary-blue-light-1) 75%)}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.vertical-bar[_ngcontent-%COMP%]{position:absolute;right:0;left:0;border-left:1px solid var(--color-light-ddd)}.horizontal-bar[_ngcontent-%COMP%]{position:absolute;border:0;right:0;left:0;background-color:#ccc;height:1px;display:inline-block}a[_ngcontent-%COMP%]:hover{text-decoration:none}.box-shadow[_ngcontent-%COMP%]{color:#34495e;background-color:#fff;border-radius:4px;box-shadow:0 4px 12px #aad9ff80}.no-space[_ngcontent-%COMP%]{display:block;margin-bottom:0}.input-box[_ngcontent-%COMP%]{border-radius:6px;border:1px solid #7e7e7e;height:30px}.input-box-1[_ngcontent-%COMP%]{display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.input-box[_ngcontent-%COMP%]::placeholder{font-size:12px;padding:6px;font-weight:200}.text-uppercase[_ngcontent-%COMP%]{text-transform:uppercase}.light-bottom-border[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}.flex-direction-coloumn[_ngcontent-%COMP%]{flex-direction:column}.text-align-center[_ngcontent-%COMP%]{text-align:center}.color-red[_ngcontent-%COMP%]{color:var(--color-red)}.primary-blue[_ngcontent-%COMP%]{color:var(--primary-blue)}.justify-content-space-between[_ngcontent-%COMP%]{justify-content:space-between}.justify-content-center[_ngcontent-%COMP%]{justify-content:center}.flex-wrap-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.h-30[_ngcontent-%COMP%]{height:30px}.h-10[_ngcontent-%COMP%]{height:10%}.h-50[_ngcontent-%COMP%]{height:50%}.h-90[_ngcontent-%COMP%]{height:90%}.w-90[_ngcontent-%COMP%]{width:90%}.pt-2[_ngcontent-%COMP%]{padding-top:2%}.pt-15[_ngcontent-%COMP%]{padding-top:15%}.pt-50[_ngcontent-%COMP%]{padding-top:50px}.pt-12[_ngcontent-%COMP%]{padding-top:12px}.p-10[_ngcontent-%COMP%]{padding:10px}.p-6[_ngcontent-%COMP%]{padding:6px}.p-20[_ngcontent-%COMP%]{padding:20px}.w-80[_ngcontent-%COMP%]{width:80%}.w-100[_ngcontent-%COMP%]{width:100%}.pl-10[_ngcontent-%COMP%]{padding-left:10px}.mt-10[_ngcontent-%COMP%]{margin-top:10%}.mt-20[_ngcontent-%COMP%]{margin-top:20%}.br-100[_ngcontent-%COMP%]{border-radius:100%}.font-10[_ngcontent-%COMP%]{font-size:10px}.fw-500[_ngcontent-%COMP%]{font-weight:500}.fw-600[_ngcontent-%COMP%]{font-weight:600}.fw-700[_ngcontent-%COMP%]{font-weight:700}.fw-800[_ngcontent-%COMP%]{font-weight:800}.row[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.col[_ngcontent-%COMP%]{padding:0!important}.main-content-div[_ngcontent-%COMP%]{padding:20px}@media only screen and (max-width: 600px){.body-content[_ngcontent-%COMP%]{padding-left:0%}.main-content-div[_ngcontent-%COMP%]{padding:10px}.title-text-2[_ngcontent-%COMP%]{font-weight:700;font-size:12px}.small-text-light-1[_ngcontent-%COMP%]{font-size:9px;font-weight:500;letter-spacing:1;color:#929292}.small-text-2[_ngcontent-%COMP%]{font-size:7px}.sub-menu-text[_ngcontent-%COMP%]{font-size:8px;font-weight:600;color:#767676}.cdk-overlay-container[_ngcontent-%COMP%]{z-index:100;bottom:0!important;left:1%;top:0%!important;position:fixed!important;width:98%!important;height:100vh}.cdk-overlay-pane.mat-mdc-dialog-panel[_ngcontent-%COMP%]{max-width:var(--mat-dialog-container-max-width, 100vw)!important;height:92vh!important}}[_ngcontent-%COMP%]:root{--white: #ffffff;--primary-dark: #242124;--primary-light-1: #393739;--primary-light-2: #4f4d4f;--primary-light-3: #656365;--primary-light-4: #7b797b;--primary-light-5: #919091;--primary-light-6: #a7a6a7;--primary-light-7: #bdbcbd;--primary-light: #d3d2d3;--primary-blue: #3f6fd6;--primary-blue-light-1: #7c9ee6;--secondary: #151522;--secondary-light: #353535;--blue-light: #f4f7fd;--blue-xx-light: #e6e6e6;--green-light: #87DE87;--green-x-light: #00d455;--green-drak: #00AA44;--orange-light: rgba(253, 233, 140, .2);--orange-xxx-light: #fffbe8;--orange-xx-light: #fff2b5;--gray-dark: #505050;--gray-light: #f9f9f9;--gray-xx-light: #ebebeb;--dark-light-1: #a7a7a7;--primary-font: "Rubik";--color-red: #ff2a2a;--color-orange: #cc6049;--color-gold-dark: #FFB242;--color-gold-light: #F8C274;--color-light: #eee;--color-light-ddd: #ddd;--blue-menu-bg-active: #d4e1f0;--blue-menu-active: #0070F9;--primary-bg-page-color: #f8f9fa;--bold: 700;--semi-bold: 600;--font-size-10: 10px;--font-size-12: 12px;--font-size-14: 14px;--font-size-16: 16px;--font-size-18: 18px;--font-size-20: 20px;--font-size-24: 24px;--font-size-32: 32px;--font-size-48: 48px;--font-size-40: 40px;--size-24: 24px;--size-16: 16px}.filter-div[_ngcontent-%COMP%]{margin-top:1.5%;padding:20px 30px;border-radius:4px;background-color:#eee;display:flex;flex-wrap:wrap}.filter-referral-div[_ngcontent-%COMP%]{width:40%}.filter-search-div[_ngcontent-%COMP%]{width:20%}.referral-input-box[_ngcontent-%COMP%]{width:80%;padding:5px 7px;margin:8px 0}.referral-multiselect-box[_ngcontent-%COMP%]{width:80%;padding:5px 0}.search-btn[_ngcontent-%COMP%]{width:80%;padding:7px;border-radius:4px;font-weight:700}.applied-filters[_ngcontent-%COMP%]{margin:12px 0 0 5px;padding:2px 7px;color:#fff;font-size:11px;letter-spacing:1px;font-weight:700}.referral-top[_ngcontent-%COMP%]{height:60%}.referral-middle[_ngcontent-%COMP%]{height:30%}.referral-bottom[_ngcontent-%COMP%]{height:10%}.referral-person-box[_ngcontent-%COMP%]{border:1px solid var(--color-light-ddd);border-radius:8px;margin:1%;padding:10px;width:23%;height:320px}.request-referral-btn[_ngcontent-%COMP%]{font-size:14px;font-weight:400;width:100%;height:30px;border-radius:3px;background-color:var(--blue-menu-active);color:#fff;font-weight:500;border:none}.referral-box-img[_ngcontent-%COMP%]{padding-top:5%;display:flex;justify-content:center;align-items:center}.margin-top-3[_ngcontent-%COMP%]{margin-top:3%}.referral-box-company[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:3%}.company-tag[_ngcontent-%COMP%]{background-color:#7f73ec;color:#fff;font-size:14px;padding:4px 10px;border-radius:4px;font-weight:600;letter-spacing:1px}.img-set[_ngcontent-%COMP%]{width:72px;height:72px}.mobile-bottom-filter[_ngcontent-%COMP%]{display:none;transition:padding .3s ease-out;background-color:var(--primary-dark);color:#fff;padding:10px 20px 20px;position:fixed;bottom:8%;width:100%}@media only screen and (max-width: 600px){.filter-div[_ngcontent-%COMP%]{display:none}.mobile-bottom-filter[_ngcontent-%COMP%]{display:block}.filter-referral-div[_ngcontent-%COMP%], .filter-search-div[_ngcontent-%COMP%], .search-btn[_ngcontent-%COMP%], .referral-input-box[_ngcontent-%COMP%], .referral-multiselect-box[_ngcontent-%COMP%]{width:100%}.filter-referral-div[_ngcontent-%COMP%]{margin-top:5%}.referral-input-box[_ngcontent-%COMP%]{color:#fff}.center-element[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.filter-search-div[_ngcontent-%COMP%]{margin-top:10%}.referral-person-box[_ngcontent-%COMP%]{width:48%;margin:1%;height:280px}.referral-top[_ngcontent-%COMP%]{height:65%}.referral-middle[_ngcontent-%COMP%]{height:25%}.referral-bottom[_ngcontent-%COMP%]{height:10%}.heading-text[_ngcontent-%COMP%]{font-size:15px}}']});let i=r;return i})();var Q=(()=>{let r=class r{};r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=M({type:r}),r.\u0275inj=_({imports:[N,A.forRoot(),I.forChild([{path:"",component:E}])]});let i=r;return i})();export{Q as ExchangeReferralModule};
