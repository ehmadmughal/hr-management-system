import{a as d,b as _,f as t,t as s,i as A,y as O,d as n,e as l,h as i,g as k,u as o,s as R,n as Y,q as E,r as P,c as C,K as x,T as z,w as W,o as Q,_ as e,Z as G,j as U,F as B,l as V,D as Z,E as J}from"./app-7572aa5b.js";import{a as K,b as X,M as ee,T as te,C as ae,c as se,_ as oe}from"./GoBackNavLink-7cf44a59.js";import{_ as y}from"./Card-ef6bc490.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as ne}from"./ToolTip-546ac067.js";import{P as j}from"./PrimaryButton-3e115bd7.js";import{S as v}from"./sweetalert2.all-4b271899.js";import{H as le}from"./HorizontalRule-1c64b989.js";import{_ as re,a as D}from"./TableHead-c5407f53.js";import{_ as $}from"./TableBodyHeader-be802581.js";import{T as ie}from"./TableRow-48354286.js";import"./index-7c45f06a.js";import"./Paginator-fff81934.js";function de(a){const r=new Date,c=r.getDate(),u=r.getFullYear(),m=r.getMonth();let h=m,g=u;a>c?h=m:(h=(m+1)%12,g=m===11?u+1:u);const w=new Date(g,h,a),b=24*60*60*1e3;return Math.ceil((w-r)/b)}function L(a){const r=new Date,c=r.getMonth(),u=r.getFullYear(),m=new Date(u,c,a),h=(c+1)%12,g=c===11?u+1:u;return(new Date(g,h,a).getTime()-m.getTime())/(1e3*3600*24)}const ce={key:0,class:"p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"},ue={class:"text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"},fe={class:"flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700"},me={class:"pt-1 text-sm text-gray-500 dark:text-gray-400"},he={key:1,class:"relative mt-4"},ge=t("svg",{class:"absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{d:"M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z",fill:"currentColor"})],-1),ye={class:"relative z-10 mt-2"},pe={class:"text-gray-800 sm:text-xl dark:text-white"},_e={class:"pt-1 text-sm text-gray-500 dark:text-gray-400"},q={__name:"BlockQuote",props:{quote:{type:String,default:"We cannot solve problems with the kind of thinking we employed when we came up with them."},author:{type:String,default:"Albert Einstein"},style:{type:Number,default:1}},setup(a){return(r,c)=>a.style===1?(d(),_("blockquote",ce,[t("p",ue,'"'+s(a.quote)+'"',1),t("div",fe,[t("cite",me,"- "+s(a.author),1)])])):a.style===2?(d(),_("blockquote",he,[ge,t("div",ye,[t("p",pe,[t("em",null,' "'+s(a.quote)+'" ',1)]),t("cite",_e,"- "+s(a.author),1)])])):A("",!0)}},xe={name:"RightArrowIcon"},we={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},be=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"},null,-1),ve=[be];function ke(a,r,c,u,m,h){return d(),_("svg",we,ve)}const De=I(xe,[["render",ke]]),Se={name:"LeftArrowIcon"},Ce={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},$e=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"},null,-1),Te=[$e];function Ae(a,r,c,u,m,h){return d(),_("svg",Ce,Te)}const Me=I(Se,[["render",Ae]]),Fe={class:"relative flex px-6 flex-col rounded-xl bg-gradient-to-r from-gray-50 to-purple-50 bg-clip-border text-gray-700 shadow-md dark:bg-gradient-to-t dark:from-gray-900 dark:to-gray-900 dark:text-gray-300 dark:shadow-lg"},Ie={class:"pt-6 pb-2 flex flex-col items-center"},Ne={class:"block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"},Be={key:0,class:"text-center block font-sans text-base font-light leading-relaxed text-inherit antialiased"},je={class:"pb-6 pt-0 flex justify-center"},Le={class:"flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-purple-500 transition-all hover:bg-purple-500/10 active:bg-purple-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button","data-ripple-dark":"true"},T={__name:"IconCard",props:{ctaText:{type:String,default:"Learn More"},heading:String,text:String,href:String},setup(a){const r=document.dir==="ltr";return(c,u)=>(d(),_("div",Fe,[t("div",Ie,[O(c.$slots,"default"),t("h5",Ne,s(a.heading??"Heading"),1),a.text?(d(),_("p",Be,s(a.text),1)):A("",!0)]),t("div",je,[n(o(R),{class:"!font-medium !text-blue-gray-900 !transition-colors hover:!text-purple-500",href:a.href??"#"},{default:l(()=>[t("button",Le,[i(s(a.ctaText)+" ",1),r?(d(),k(De,{key:0})):A("",!0),r?A("",!0):(d(),k(Me,{key:1}))])]),_:1},8,["href"])])]))}},qe={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden"},F={__name:"ProgressBar",props:{percentage:Number,text:String,noText:{type:Boolean,default:!1},color:{type:String,default:"bg-purple-500"},textColor:{type:String,default:"text-purple-100"}},setup(a){const r=a,c=r.color+" "+r.textColor+(r.percentage===0?" !p-0 !text-black":"");return(u,m)=>(d(),_("div",qe,[t("div",{class:Y([c,"flex items-center justify-center h-full text-xs font-medium text-center p-0.5 leading-none rounded-full"]),style:E("width:"+(a.percentage>100?100:a.percentage)+"%")},s(a.noText?"​":a.text??(a.percentage===0?"":a.percentage.toFixed(0)+"%")),7)]))}};function Ee(a){var h;const r=P(localStorage.getItem("lastApiCallTimestamp")||null),c="https://api.quotable.io/quotes/random?tags=Work|Motivational|Inspirational|Creativity";async function u(){try{const g=await fetch(c);if(!g.ok)throw new Error("API call error.");const w=await g.json();a.value=w[0],r.value=Date.now(),localStorage.setItem("lastApiCallTimestamp",r.value),localStorage.setItem("quote",JSON.stringify(w))}catch(g){throw new Error("Network response was NOT ok:",g)}}function m(){if(!r.value)return!0;const g=Date.now(),w=936e5;return g-r.value>=w}m()?u():a.value=(h=JSON.parse(localStorage.getItem("quote")))==null?void 0:h[0]}const M=a=>(Z("data-v-ce50d2cf"),a=a(),J(),a),Pe={class:"py-8"},He={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Oe={class:"flex justify-between gap-4"},Re={class:"!card-header !mb-0"},Ye=["onSubmit"],ze={class:"text-xl"},We=M(()=>t("br",null,null,-1)),Qe={class:"text-xs text-gray-200"},Ge={key:0,class:"text-sm"},Ue=M(()=>t("br",null,null,-1)),Ve={key:1,class:"text-sm"},Ze=M(()=>t("br",null,null,-1)),Je={class:"flex flex-col md:flex-row justify-between md:gap-4"},Ke={class:"text-2xl"},Xe={class:"flex justify items-center"},et={class:"text-2xl text-center font-semibold mb-4"},tt={class:"space-y-4"},at={class:"text-xl text-center"},st={class:"text-center text-gray-700 text-sm"},ot={class:"flex flex-col md:flex-row justify-between md:gap-4"},nt={class:"text-2xl text-white"},lt={class:"mt-4 text-white"},rt={class:"text-white"},it={class:"font-medium"},dt={class:"mt-1 text-white"},ct={class:"font-medium"},ut={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2"},ft={class:"text-2xl"},mt={class:"mt-4 w-full flex flex-col"},ht={class:"flex justify-between align-middle mb-6 sm:mb-2"},gt={class:"font-medium"},yt={class:"flex justify-between align-middle mb-6 sm:mb-2"},pt={class:"font-medium"},_t={class:"flex justify-between align-middle mb-6 sm:mb-2"},xt={class:"font-medium"},wt={class:"text-2xl"},bt={class:"mt-4 grid grid-rows-3"},vt={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},kt={class:"w-full sm:w-1/3"},Dt={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},St={class:"w-full sm:w-1/3"},Ct={class:"flex flex-col lg:flex-row justify-between align-middle mb-6 sm:mb-2"},$t={class:"w-full sm:w-1/3"},Tt=M(()=>t("br",null,null,-1)),At={class:"flex flex-col md:flex-row"},Mt={class:"text-2xl text-white"},Ft={class:"flex flex-col md:flex-row justify-between md:gap-4"},It={class:"text-2xl"},Nt={class:"flex flex-wrap justify-center gap-4"},Bt={__name:"Dashboard",props:{salary:Object,payroll_day:Number,employee_stats:Object,attendance_status:Number,is_today_off:Boolean,expiringDocuments:Object},setup(a){const r=a,c=C(()=>de(r.payroll_day)),u=C(()=>Math.floor((L(r.payroll_day)-c.value)/L(r.payroll_day)*100)),m=C(()=>r.payroll_day===1?e("st"):r.payroll_day===2?e("nd"):r.payroll_day===3?e("rd"):e("th")),h=new Date().toLocaleDateString(x().props.locale,{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),g=z({}),w=C(()=>r.attendance_status===0?e("Sign in"):e("Sign off"));let b=r.attendance_status===0;W(()=>r.attendance_status,()=>{b=r.attendance_status===0});const N=()=>{const f=b?"attendance.dashboardSignIn":"attendance.dashboardSignOff";v.mixin({customClass:{cancelButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",confirmButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:e("Confirm :signType for attendance for :today?",{signType:b?e("Sign in"):e("Sign off"),today:h}),html:b.value?"<b>"+e("Notes")+"</b><br>"+e("1. Attendance for non-remote employees can only be taken from inside the organization.")+"<br>"+e("2. You need to register sign-off here again before leaving, otherwise, your attendance will not be accounted."):"",icon:"info",showCancelButton:!0,confirmButtonText:e("Confirm"),cancelButtonText:e("Cancel"),reverseButtons:!0}).then(p=>{p.isConfirmed&&g.post(route(f,{id:x().props.auth.user.id}),{preserveScroll:!0,onError:()=>{x().props.errors.ip_error?v.fire(e("Attendance Error"),x().props.errors.ip_error,"error"):x().props.errors.no_ip?v.fire(e("IP Error"),x().props.errors.no_ip,"error"):x().props.errors.authorization_error?v.fire(e("Authorization Error"),x().props.errors.authorization_error,"error"):x().props.errors.day_off?v.fire(e("Today is OFF!"),x().props.errors.day_off,"error"):v.fire(e("Error"),e("Something went wrong.")+"</br>"+e("Please contact your administrator of this error"),"error")},onSuccess:()=>{v.fire(e("Action Registerd"),b?e("Don't forget to come here and sign-off before you leave so that the attendance gets registered!"):"","success")}})})},S=P(null);return Q(()=>{Ee(S)}),(f,H)=>(d(),_(B,null,[n(o(G),{title:o(e)("Dashboard")},null,8,["title"]),n(oe,null,{tabs:l(()=>[n(K),n(X,{href:f.route("dashboard.index"),active:f.route().current("dashboard.index")},{default:l(()=>[i(s(o(e)("Dashboard")),1)]),_:1},8,["href","active"])]),default:l(()=>[t("div",Pe,[t("div",He,[t("div",Oe,[n(y,{class:"w-full md:w-3/4 !mt-0"},{default:l(()=>[t("h1",Re,s(o(e)("Welcome, :name",{name:f.$page.props.auth.user.name}))+"!",1)]),_:1}),n(y,{class:"w-full md:w-1/4 !mt-0",vl:"","fancy-p":!1},{default:l(()=>[a.attendance_status!==2&&!a.is_today_off?(d(),_("form",{key:0,onSubmit:U(N,["prevent"]),class:"w-full h-full"},[n(j,{class:"w-full h-full flex justify-center"},{default:l(()=>[t("span",ze,[i(s(o(e)("Attendance :msg",{msg:w.value}))+" ",1),We,t("span",Qe,s(o(e)("For"))+" "+s(o(h)),1)])]),_:1})],40,Ye)):(d(),k(j,{key:1,class:"w-full h-full flex justify-center !border-0 bg-gradient-to-r from-green-500 to-green-400 cursor-not-allowed",disabled:""},{default:l(()=>[a.is_today_off?(d(),_("span",Ge,[i(s(o(e)("Today is off! 🕺🕺")),1),Ue])):(d(),_("span",Ve,[i(s(o(e)("Attendance Taken Today! 🎉")),1),Ze]))]),_:1}))]),_:1})]),t("div",Je,[n(y,{class:"w-full md:w-3/4"},{default:l(()=>[t("h1",Ke,s(o(e)("Quote of the day")),1),t("div",Xe,[S.value?(d(),k(q,{key:0,class:"mb-0",style:2,quote:S.value.content,author:S.value.author},null,8,["quote","author"])):(d(),k(q,{key:1,class:"mb-0",style:2,quote:o(e)("Loading Quote..."),author:o(e)("Loading Author...")},null,8,["quote","author"]))])]),_:1}),n(y,{class:"w-full md:w-1/4",vl:""},{default:l(()=>[t("h1",et,s(o(e)("Your Salary")),1),t("div",tt,[t("p",at,[i(s(a.salary[0])+" ",1),t("span",null,s(new Intl.NumberFormat().format(a.salary[1])),1)]),n(le,{class:"!bg-neutral-300"}),t("p",st,s(o(e)("Last Updated: :salary",{salary:a.salary[2]})),1)])]),_:1})]),t("div",ot,[n(y,{class:"w-full md:w-1/4 bg-gradient-to-r from-indigo-700 to-purple-800 glow-element"},{default:l(()=>[t("h1",nt,s(o(e)("Pay Day")),1),t("div",lt,[t("p",rt,[t("span",it,s(o(e)("Pay Day"))+": ",1),i(s(r.payroll_day),1),t("sup",null,s(m.value),1),i(" "+s(o(e)("of every month"))+". ",1)]),t("p",dt,[t("span",ct,s(o(e)("Days Remaining"))+": ",1),i(s(c.value)+" "+s(o(e)("Days"))+". ",1)]),t("div",ut,[t("div",{class:"bg-amber-400 text-xs font-medium text-indigo-700 text-center p-0.5 leading-none rounded-full",style:E("width:"+(u.value>100?100:u.value)+"%")},s(u.value.toFixed(0)+"%"),5)])])]),_:1}),n(y,{class:"w-full md:w-1/4"},{default:l(()=>[t("h1",ft,s(o(e)("Data of :month",{month:new Date().toLocaleString(f.$page.props.locale,{month:"long"})})),1),t("div",mt,[t("div",ht,[t("p",gt,s(o(e)("Work Days"))+": ",1),t("p",null,s(a.employee_stats.attendableThisMonth)+" "+s(o(e)("Days")),1)]),t("div",yt,[t("p",pt,s(o(e)("Weekends"))+": ",1),t("p",null,s(a.employee_stats.weekendsThisMonth)+" "+s(o(e)("Days")),1)]),t("div",_t,[t("p",xt,s(o(e)("Holidays"))+": ",1),t("p",null,s(a.employee_stats.holidaysThisMonth)+" "+s(o(e)("Days")),1)])])]),_:1}),n(y,{class:"w-full md:w-2/4"},{default:l(()=>[t("h1",wt,s(o(e)("Your Attendance This Month")),1),t("div",bt,[t("div",vt,[t("p",kt,s(o(e)("Attended")+" "+a.employee_stats.totalAttendanceSoFar),1),n(F,{class:"col-span-3",color:"bg-green-500","no-text":"",percentage:a.employee_stats.totalAttendanceSoFar/a.employee_stats.attendableThisMonth*100,text:a.employee_stats.totalAbsenceSoFar+(a.employee_stats.totalAbsenceSoFar>0?o(e)("Day(s)"):"")},null,8,["percentage","text"])]),t("div",Dt,[t("p",St,s(o(e)("Absented:"))+" "+s(a.employee_stats.absentedThisMonth),1),n(F,{"no-text":"",color:"bg-red-500",percentage:a.employee_stats.totalAbsenceSoFar/a.employee_stats.YearStats.absence_limit*100,text:a.employee_stats.totalAbsenceSoFar+(a.employee_stats.totalAbsenceSoFar>0?o(e)("Day(s)"):"")},null,8,["percentage","text"])]),t("div",Ct,[t("p",$t,[i(s(o(e)("Hours:"))+" ",1),n(ne,{direction:"bottom"},{default:l(()=>[i(s(o(e)("Number of Overtime/Undertime Hours (so far).")),1),Tt,i(" "+s(o(e)("This value will be accounted for in the payroll, resulting in a reward or a penalty.")),1)]),_:1}),i(" "+s(a.employee_stats.hoursDifferenceSoFar.toFixed(0)+o(e)("h")),1)]),n(F,{class:"col-span-3",percentage:a.employee_stats.hoursDifferenceSoFar,text:a.employee_stats.hoursDifferenceSoFar===0?"":Math.abs(a.employee_stats.hoursDifferenceSoFar).toFixed(2)+" "+o(e)("Hours")+" "+(a.employee_stats.hoursDifferenceSoFar>0?o(e)("extra"):o(e)("late")),color:a.employee_stats.hoursDifferenceSoFar>0?"bg-green-500":"bg-red-500"},null,8,["percentage","text","color"])])])]),_:1})]),t("div",At,[n(y,{class:"w-full"},{default:l(()=>[t("h1",Mt,s(o(e)("Expiring Documents (In 60 Days)")),1),n(re,{links:a.expiringDocuments.links,showingNumber:a.expiringDocuments.data.length,totalNumber:a.expiringDocuments.total},{Head:l(()=>[n(D,null,{default:l(()=>[i(s(o(e)("Document Name")),1)]),_:1}),n(D,null,{default:l(()=>[i(s(o(e)("Employee Name")),1)]),_:1}),n(D,null,{default:l(()=>[i(s(o(e)("Expiry Date")),1)]),_:1}),n(D,null,{default:l(()=>[i(s(o(e)("Days Left")),1)]),_:1}),n(D,null,{default:l(()=>[i(s(o(e)("Action")),1)]),_:1})]),Body:l(()=>[(d(!0),_(B,null,V(a.expiringDocuments.data,p=>(d(),k(ie,{key:p.id},{default:l(()=>[n($,{href:f.route("employees.show",{id:p.employee.id})},{default:l(()=>[i(s(p.document_name),1)]),_:2},1032,["href"]),n($,{href:f.route("employees.show",{id:p.employee.id})},{default:l(()=>[i(s(p.employee.name),1)]),_:2},1032,["href"]),n($,{href:f.route("employees.show",{id:p.employee.id})},{default:l(()=>[i(s(p.expiration_date),1)]),_:2},1032,["href"]),n($,{href:f.route("employees.show",{id:p.employee.id})},{default:l(()=>[i(s(p.expiration_date?Math.max(Math.ceil((new Date(p.expiration_date)-new Date)/(1e3*60*60*24)),0):o(e)("No Expiry")),1)]),_:2},1032,["href"])]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})]),t("div",Ft,[n(y,{class:"!p-2 w-full"},{default:l(()=>[t("h1",It,s(o(e)("Quick Actions")),1),t("div",Nt,[n(y,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:l(()=>[n(T,{heading:o(e)("Payrolls"),"cta-text":o(e)("Go To Payments"),href:f.route("payrolls.index")},{default:l(()=>[n(ee,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),n(y,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:l(()=>[n(T,{heading:o(e)("Attendance"),"cta-text":o(e)("Go to Attendance"),href:f.route("attendance.dashboard")},{default:l(()=>[n(te,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),n(y,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:l(()=>[n(T,{heading:o(e)("Calendar"),"cta-text":o(e)("Go to Calendar"),href:f.route("calendar.index")},{default:l(()=>[n(ae,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1}),n(y,{class:"w-full lg:w-1/4 !shadow-none !overflow-visible flex-1","fancy-p":!1},{default:l(()=>[n(T,{heading:o(e)("Support"),"cta-text":o(e)("Go To Requests"),href:f.route("requests.index")},{default:l(()=>[n(se,{class:"!mb-4 !h-12 !w-12 text-purple-500"})]),_:1},8,["heading","cta-text","href"])]),_:1})])]),_:1})])])])]),_:1})],64))}},Ut=I(Bt,[["__scopeId","data-v-ce50d2cf"]]);export{Ut as default};
