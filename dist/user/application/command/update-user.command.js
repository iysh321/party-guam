"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCommand = void 0;
class UpdateUserCommand {
    constructor(id, is_party, meeting_type, meeting_week, meeting_time, mbti, skills) {
        this.id = id;
        this.is_party = is_party;
        this.meeting_type = meeting_type;
        this.meeting_week = meeting_week;
        this.meeting_time = meeting_time;
        this.mbti = mbti;
        this.skills = skills;
    }
}
exports.UpdateUserCommand = UpdateUserCommand;
//# sourceMappingURL=update-user.command.js.map