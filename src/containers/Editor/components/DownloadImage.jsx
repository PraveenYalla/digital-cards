import * as htmlToImage from "html-to-image";

import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export const downloadImage = (layoutID) => {
  htmlToImage
    .toJpeg(document.getElementById(`${layoutID}`), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
};
