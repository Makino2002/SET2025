class User {
  constructor() {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.rank = -8;
    this.progress = 0;
  }
  _rankIndex(rank) {
    const index = this.ranks.indexOf(rank);
    if (index === -1) {
      throw new Error("Rank không hợp lệ");
    }
    return index;
  }
  _updateRank() {
    while (this.progress >= 100) {
      if (this.rank === 8 || (this.rank === 7 && this.progress >= 100)) {
        this.rank = 8;
        this.progress = 0;
        break;
      }
      this.progress -= 100;
      this.rank = this.ranks[this._rankIndex(this.rank) + 1];
    }
  }
  incProgress(activityRank) {
    if (!this.ranks.includes(activityRank)) {
      throw new Error("Rank của hoạt động không hợp lệ");
    }
    if (this.rank === 8) {
      return;
    }
    const rankDiff = this._rankIndex(activityRank) - this._rankIndex(this.rank);
    if (rankDiff === 0) {
      this.progress += 3;
    } else if (rankDiff === -1) {
      this.progress += 1;
    } else if (rankDiff > 0) {
      this.progress += 10 * rankDiff * rankDiff;
    }

    this._updateRank();
  }
  toString() {
    return `Rank: ${this.rank}, Progress ${this.progress}`;
  }
}
const user = new User();
user.incProgress(2);
user.incProgress(2);
user.incProgress(5);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(7);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);
user.incProgress(8);

console.log(user.toString());
