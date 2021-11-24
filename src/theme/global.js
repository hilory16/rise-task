import { createGlobalStyle } from 'styled-components';
import { override } from 'styles/override';
import { fontFamily } from './font';
import { normalize } from './normalize';
import { variables } from './variables';

const GlobalStyles = createGlobalStyle`
   ${normalize};
   ${variables};
   ${fontFamily};
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;600;700;800;900&display=swap');

   /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      /**
    * The default font size for browsers is 16px.
    * We apply a size of 62.5% so that, by default, all math with rems will use
    * 10px as a base instead of 16px.
    */
      font-size: 62.5%;
   }

   body {
      margin: 0;
      min-height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      /* font-family: 'Inter', sans-serif; */

      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: -0.03rem;
      line-height: 2.5rem;
   }

   html,
   body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: "Mark OT", sans-serif;

   }

   body{
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
   }

   u,
   a {
      @supports (text-underline-offset: 0.4rem) {
         text-underline-offset: 0.4rem;
         padding-bottom: 0.1rem;
      }
      @supports not (text-underline-offset: 0.4rem) {
         text-underline-position: under;
      }
   }

   .link {
      color: inherit;
      text-decoration: none;
      outline: none;
   }
   .form-control,
   .form-select {
      font-size:initial;
   }
   input,select{
      outline:none;
   }

   .biz-details-modal {
      min-width: 75%;
   }
   .biz-security-question-modal{
      max-width:500px;
   }

   ${override}
`;

export { GlobalStyles };
