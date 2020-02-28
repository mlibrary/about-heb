import CMS from 'netlify-cms-app';
import LinkFileComponent from "./components/linkFileComponent"

CMS.registerEditorComponent(LinkFileComponent);

// https://github.com/netlify/netlify-cms/issues/1737 and HELIO-3241
window.CMS_MANUAL_INIT = true;

console.log("process.env.BRANCH", process.env.BRANCH);
console.log("process.env.BRANCH === preview", process.env.BRANCH === "preview");

if (process.env.BRANCH === "preview") {
  console.log("init with preview")
  CMS.init({
    config: {
      backend: {
        app_id: "1ad010fc364de8a6303468218779296589f4f424dd3284e42bf954cad431395b",
      }
    }
  });
} else {
  console.log("init with master or whatever")
  CMS.init({
    config: {
      backend: {
        app_id: "03d3fe1c9a36d44c83ea5d1f0382ac41333bd88052587631ae9fa15ce6b15123"
      }
    }
  });
}
