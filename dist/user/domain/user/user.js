"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSkill = exports.User = void 0;
class User {
    constructor(id, account, nickname, email, image = null, isParty = null, meetingType = null, meetingWeek = null, meetingTime = null, mbti = null, hp = null, mp = null, userSkills = [], userExperiences = []) {
        this.id = id;
        this.account = account;
        this.nickname = nickname;
        this.email = email;
        this.image = image;
        this.isParty = isParty;
        this.meetingType = meetingType;
        this.meetingWeek = meetingWeek;
        this.meetingTime = meetingTime;
        this.mbti = mbti;
        this.hp = hp;
        this.mp = mp;
        this.userSkills = userSkills;
        this.userExperiences = userExperiences;
    }
    getId() {
        return this.id;
    }
}
exports.User = User;
class UserSkill {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
    getId() {
        return this.id;
    }
}
exports.UserSkill = UserSkill;
//# sourceMappingURL=user.js.map