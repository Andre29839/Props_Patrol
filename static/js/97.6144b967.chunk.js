"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[97],{9191:function(A,o,i){i.r(o),i.d(o,{default:function(){return d}});var s,C=i(5705),g=i(9434),E=i(9085),Q=i(8007),t=Q.Ry().shape({email:Q.Z_().email("Please enter a valid email address").test("trim","The field must not start or end with spaces",(function(A){return!A||A.trim()===A})).required("required field").max(30,"the name must contain a maximum of 30 characters"),password:Q.Z_().test("trim","The field must not start or end with spaces",(function(A){return!A||A.trim()===A})).required("required field").min(6,"Password must contain at least 6 characters").max(12,"Password must contain a maximum of 12 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|.*[!@#$%^&*()_+\-=.<>])[a-zA-Z\d!@#$%^&*()_+\-=.<>]{6,12}$/,"Password must contain at least one uppercase letter, one lowercase letter and one number")}),B=i(2330),l=i(9418),I=i(4221),a=i(2036),e=i(3051),K=i(3588),S=i(3535),F=i(8729),U=i(184),L=function(){var A=(0,K.r)(["password1","password2"]),o=A.showPasswords,i=A.togglePasswordVisibility,s=(0,g.I0)();return(0,U.jsxs)(a.JE,{children:[(0,U.jsx)(B.T,{}),(0,U.jsx)(C.J9,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:function(A,o){var i=o.resetForm;s((0,F.iW)(A)).unwrap().then((function(A){i(),E.Am.success("Well done, ".concat(A.user.username,"! You have signed in successfully."))})).catch((function(A){E.Am.error("You entered incorrect data, please check your password or email!")}))},children:(0,U.jsxs)(a.tN,{children:[(0,U.jsxs)(a.QI,{children:[(0,U.jsxs)(a.aS,{children:[(0,U.jsx)(a.sG,{type:"email",name:"email",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"E-mail",autoComplete:"off",required:!0}),(0,U.jsx)(a.LQ,{size:24})]}),(0,U.jsx)(l.X,{name:"email"}),(0,U.jsxs)(a.tX,{children:[(0,U.jsxs)(a.M$,{children:[(0,U.jsx)(a.sG,{type:o.password1?"text":"password",name:"password",title:"Enter the password more difficult, letter, digit, capital letter.",placeholder:"Password",autoComplete:"off",required:!0}),(0,U.jsx)(a.I2,{})]}),(0,U.jsx)(I.S,{showPassword:o.password1,onToggle:function(){return i("password1")}})]}),(0,U.jsx)(l.X,{name:"password"})]}),(0,U.jsx)(a.CJ,{children:(0,U.jsx)(S.Z,{variant:"primary",type:"submit",text:"log in"})})]})}),(0,U.jsx)(e.jJ,{to:"/register",children:"Register"})]})},r=i(168),n=i(6487),R=i.p+"static/media/bg-login-tablet.a74d8d026fdb47b98b7b.jpg",q=i.p+"static/media/bg-login-tablet@2x.65b89d833a8322767c3d.jpg",W=i.p+"static/media/bg-login-web.20b913d3ca3801ec00e3.jpg",V=i.p+"static/media/bg-login-web@2x.9522df4284cf229cb617.jpg",p=n.ZP.div(s||(s=(0,r.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background: #101010;\n\n  background-size: cover;\n  background-image: url(",");\n\n  @media (min-device-pixel-ratio: 2),\n    (-webkit-min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media (min-width: 768px) {\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (-webkit-min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media (min-width: 1280px) {\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (-webkit-min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),"data:image/jpeg;base64,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","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIBHACgAMBIgACEQEDEQH/xAAyAAEBAQEBAQEAAAAAAAAAAAAAAQUCBAMGAQEBAAMBAQAAAAAAAAAAAAAAAQIEBQMG/9oADAMBAAIQAxAAAAD8mPpd1LECEsQCBjBEFkESWIlkjmkgiSxJLISxIIkshLEgiLJIISyIIgiCJLICTlYBCWQEQSwASQKEkAEBH6QdjdQQEQgREsEsQRBESyIsSCSEEskksEskhASEskiyEskghLIiwgxJYkEQRBEWQlgERZEEoEWQCJZAAR+kh19wEAgEskgsSyRLBLEQHNSQJJZCWJJZCCQSSWSpZIliJZCWQlkJZEEJZJAsWSQQlkJZAQlRJSwQlgEAiWQC/ox1toBLAEhAERJAEEhBLESyRLCCSSwgkgkksVLJEskCJLBLMSWRFglkJZCWRBCWSJRBARBKlEEQAQCJUfoh1tsQBEBBEsEEEQCSxEshBEsiSxIskgISRLBLISyQSEsgIksgCSyEsgJOVkBEWRFgEQShEWEVEACBH6JHW2xEsAEhAEQkQEsIESxIIhBLESySCJLBLJEqIE5WQlkBElRBEBJZASQRFkJZARAQShAJFksWAQB+hHV2UAEQEEEEsAkhEEoSQQSyEESxISAkksAiCSSokogiCIIgiTqEWRBCWSJUQRFRAQQCpUkCpUkVG+OrtCIFIQIgCCICCICWIlkJYkEQWSWQJIlkASWSBElkAQRBEEJZCWEEBJJ1IgAxRYJURRBCVEChJvDq7ICCIACCCAgIgSIECQElkCIlghASQRAkEQEERZEEJZCWQCSVEEJZAEWQlRBAQlEEJYoG8jp7FhYgAiECAiAIIgCCWIlkJYiEJYiWARCSAJZEERYBikogiSogiASpJLICEogiLIACAiAijcR09iwCCwQQEARLARAIBCSASxIIgQCCJLJAEISwiyAiCJKiCEsiACRLIiiCEqICKiCAAiCXbR0/ewARAAQQQBEBLARAIQCSAgRLIEQIgIISyEsAiCIshLAJJKliyRLIASoghLIASiCAgDZHS9xAARLAIARAEBAJELEBLISxAhKJLJAIBLIiyAIIiyEsgCCIICSTqSxYBIlEERUQARFEBsI6HvUIAJQBCACQAghACQEAlJBCWCVEliAJZCWAkBARJYBCWQlEWSJZARFRAJURRJURYBAGsOh7EAhUIAIVAAgIIAgiWAIBBECCQBARZCWCVEEBEAlRJZACVJJURYBCVEWQBFRFhFEVGojf9rBAAogsARLAEAEEAgkAQAIEggCAQhLAJAIJYsgIgIqIJEsgCKiACEqIIASiLDTG96gEFgCAAIIBUEgAgCCACABBJFgEQCUQQlgEJUQEWQEJSSVEEoIERZAARFRAJUaUN71AQAAsILAAgQAESwAggCAAgQCAggBLIAggBLISoiyAQIgWCAgEioiiCAiKPeNz1AIsqCwAARAAESooIEABABBAAIIgAEskAioiwSyUISiLICRKIqJKiKIIACIogPejb9LAAABAEAKIAQABAASxAWBAEIAikiyEsAAhLIBYsAgJEqIAICIsEoioiwCAPaNr0ABBCoAoQABAEKCAEsoAJIBKIAASSwVKIsgESwCUISiCAkAiogAgCKIqIIA9Y2cwKgEqoLAABEAKAEKgAAEQABLACCAAQCLISyAUIACSLAICAIqIsAgACKj1DYzIKgCgQFESwoAAKSwABBAAABLIAgAAkAAghKIslACARKiBQgECAIqIsAj0j3zChCoLLECgAAAqAABBAAAAQAAiiCAAQISwAAiyUIACARKiKIIAACAPuPbMAAECgAAEsoAAAKgQAACAAABAgCCAAEqIAIACEoACIsgAAAIA+xPXKoKltABACCwoAAKAIQAABAAAABAAEqIsAgACLIAACAAgIAASoiwA+o9MwAKKISwAAoAAKSxAAAoBKIAAAIBAAAIsgAIACIsAAAgAAIACAPoM8yUEqpQEEKiqgoBALAAtBAAEogAAAAAQAIASiLIACAAAhKIolAIAACOhlmAsVUAIsAUACBaAAFAgAAgFABAAAIAAAEAJRFRFEECkURURYAAABHQuQAAUAAFABQAAIFAAAIAUAAAAAEAgAAAQAEAAABCURRFRFEUVDKoLCgAAqpQAiypQAlAoABCgABSLAAogAAAAAgEFIqIsAAgAolIAASiCZAAB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",R,q,W,V),d=function(){return(0,U.jsx)(p,{children:(0,U.jsx)(L,{})})}}}]);
//# sourceMappingURL=97.6144b967.chunk.js.map