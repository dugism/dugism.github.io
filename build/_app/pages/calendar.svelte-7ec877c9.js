import{S as ln,i as fn,s as hn,e as mn,t as gn,c as Mn,a as vn,g as wn,d as Z,f as Tn,H as yn,I as U}from"../chunks/vendor-a7db36b2.js";var Dn={};(function(s){s.__esModule=!0,s.getMoonTimes=s.getMoonIllumination=s.getMoonPosition=s.getTimes=s.addTime=s.times=s.getPosition=void 0;var f=Math.PI,a=Math.sin,i=Math.cos,P=Math.tan,j=Math.asin,H=Math.atan2,O=Math.acos,l=f/180,q=1e3*60*60*24,$=2440588,F=2451545;function x(n){return n.valueOf()/q-.5+$}function I(n){return new Date((n+.5-$)*q)}function A(n){return x(n)-F}var L=l*23.4397;function N(n,t){return H(a(n)*i(L)-P(t)*a(L),i(n))}function z(n,t){return j(a(t)*i(L)+i(t)*a(L)*a(n))}function R(n,t,e){return H(a(n),i(n)*a(t)-P(e)*i(t))}function p(n,t,e){return j(a(t)*a(e)+i(t)*i(e)*i(n))}function B(n,t){return l*(280.16+360.9856235*n)-t}function nn(n){return n<0&&(n=0),2967e-7/Math.tan(n+.00312536/(n+.08901179))}function G(n){return l*(357.5291+.98560028*n)}function K(n){var t=l*(1.9148*a(n)+.02*a(2*n)+3e-4*a(3*n)),e=l*102.9372;return n+t+e+f}function Q(n){var t=G(n),e=K(t);return{dec:z(e,0),ra:N(e,0)}}function tn(n,t,e){var u=l*-e,r=l*t,c=A(n),o=Q(c),d=B(c,u)-o.ra;return{azimuth:R(d,r,o.dec),altitude:p(d,r,o.dec)}}s.getPosition=tn,s.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];function en(n,t,e){s.times.push([n,t,e])}s.addTime=en;var V=9e-4;function an(n,t){return Math.round(n-V-t/(2*f))}function W(n,t,e){return V+(n+t)/(2*f)+e}function X(n,t,e){return F+n+.0053*a(t)-.0069*a(2*e)}function rn(n,t,e){return O((a(n)-a(t)*a(e))/(i(t)*i(e)))}function on(n){return-2.076*Math.sqrt(n)/60}function un(n,t,e,u,r,c,o){var d=rn(n,e,u),h=W(d,t,r);return X(h,c,o)}function sn(n,t,e,u){u=u||0;var r=l*-e,c=l*t,o=on(u),d=A(n),h=an(d,r),g=W(0,r,h),v=G(g),y=K(v),_=z(y,0),w=X(g,v,y),D,b,T,M,J,C,m={solarNoon:I(w),nadir:I(w-.5)};for(D=0,b=s.times.length;D<b;D+=1)T=s.times[D],M=(T[0]+o)*l,J=un(M,r,c,_,h,v,y),C=w-(J-w),m[T[1]]=I(C),m[T[2]]=I(J);return m}s.getTimes=sn;function Y(n){var t=l*(218.316+13.176396*n),e=l*(134.963+13.064993*n),u=l*(93.272+13.22935*n),r=t+l*6.289*a(e),c=l*5.128*a(u),o=385001-20905*i(e);return{ra:N(r,c),dec:z(r,c),dist:o}}function k(n,t,e){var u=l*-e,r=l*t,c=A(n),o=Y(c),d=B(c,u)-o.ra,h=p(d,r,o.dec),g=H(a(d),P(r)*i(o.dec)-a(o.dec)*i(d));return h=h+nn(h),{azimuth:R(d,r,o.dec),altitude:h,distance:o.dist,parallacticAngle:g}}s.getMoonPosition=k;function cn(n){var t=A(n||new Date),e=Q(t),u=Y(t),r=149598e3,c=O(a(e.dec)*a(u.dec)+i(e.dec)*i(u.dec)*i(e.ra-u.ra)),o=H(r*a(c),u.dist-r*i(c)),d=H(i(e.dec)*a(e.ra-u.ra),a(e.dec)*i(u.dec)-i(e.dec)*a(u.dec)*i(e.ra-u.ra));return{fraction:(1+i(o))/2,phase:.5+.5*o*(d<0?-1:1)/Math.PI,angle:d}}s.getMoonIllumination=cn;function E(n,t){return new Date(n.valueOf()+t*q/24)}function dn(n,t,e,u){var r=new Date(n);u?r.setUTCHours(0,0,0,0):r.setHours(0,0,0,0);for(var c=.133*l,o=k(r,t,e).altitude-c,d,h,g,v,y,_,w,D,b,T,M,J,C,m=1;m<=24&&(d=k(E(r,m),t,e).altitude-c,h=k(E(r,m+1),t,e).altitude-c,y=(o+h)/2-d,_=(h-o)/2,w=-_/(2*y),D=(y*w+_)*w+d,b=_*_-4*y*d,T=0,b>=0&&(C=Math.sqrt(b)/(Math.abs(y)*2),M=w-C,J=w+C,Math.abs(M)<=1&&T++,Math.abs(J)<=1&&T++,M<-1&&(M=J)),T===1?o<0?g=m+M:v=m+M:T===2&&(g=m+(D<0?J:M),v=m+(D<0?M:J)),!(g&&v));m+=2)o=h;var S={};return g&&(S.rise=E(r,g)),v&&(S.set=E(r,v)),!g&&!v&&(S[D>0?"alwaysUp":"alwaysDown"]=!0),S}s.getMoonTimes=dn})(Dn);function Jn(s){let f,a;return{c(){f=mn("h1"),a=gn("funny")},l(i){f=Mn(i,"H1",{});var P=vn(f);a=wn(P,"funny"),P.forEach(Z)},m(i,P){Tn(i,f,P),yn(f,a)},p:U,i:U,o:U,d(i){i&&Z(f)}}}function Pn(s){console.log("hello world");let f=new Date;return console.log(f.getUTCDay()),[]}class bn extends ln{constructor(f){super();fn(this,f,Pn,Jn,hn,{})}}export{bn as default};
