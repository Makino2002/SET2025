// class User {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//   }
//   countX() {
//     return this.x++;
//   }
//   countY() {
//     return this.y++;
//   }
// }
// const User1 = new User();

// console.log(User1.x, User1.y);
// User1.countX();
// console.log(User1.countX(), User1.countY());
function ocr(image) {
  const numberTemplates = {
    0: [
      /* Dữ liệu mẫu của số 0 (pixels array) */
    ],
    1: [
      /* Dữ liệu mẫu của số 1 */
    ],
    2: [
      /* Dữ liệu mẫu của số 2 */
    ],
    3: [
      /* Dữ liệu mẫu của số 3 */
    ],
    4: [
      /* Dữ liệu mẫu của số 4 */
    ],
    5: [
      /* Dữ liệu mẫu của số 5 */
    ],
    6: [
      /* Dữ liệu mẫu của số 6 */
    ],
    7: [
      /* Dữ liệu mẫu của số 7 */
    ],
    8: [
      /* Dữ liệu mẫu của số 8 */
    ],
    9: [
      /* Dữ liệu mẫu của số 9 */
    ],
  };

  // Hàm tính toán sự tương đồng giữa mảng pixel của hình ảnh và mẫu
  function matchImageToNumber(imagePixels, numberPixels) {
    let similarity = 0;
    for (let i = 0; i < imagePixels.length; i++) {
      if (imagePixels[i] === numberPixels[i]) {
        similarity++;
      }
    }
    return similarity / imagePixels.length; // Tỷ lệ phần trăm tương đồng
  }

  let bestMatch = null;
  let highestSimilarity = 0;

  // So khớp hình ảnh với từng mẫu
  for (const number in numberTemplates) {
    const templatePixels = numberTemplates[number];
    const similarity = matchImageToNumber(image.pixels, templatePixels);

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatch = number;
    }
  }

  return bestMatch; // Trả về số khớp nhất
}
