export class User {
  constructor(
    private account: string,
    private nickname: string,
    private email: string,
  ) {}

  getAccount(): Readonly<string> {
    return this.account;
  }

  getNickname(): Readonly<string> {
    return this.nickname;
  }

  getEmail(): Readonly<string> {
    return this.email;
  }
}

// 사용자 애그리게이트 클래스 정의
// export class UserAggregate {
//   private readonly user: UserEntity;
//   private readonly follows: FollowEntity[];
//   private readonly parties: PartyUserEntity[];
//   private readonly userSkills: UserSkillEntity[];
//   private readonly userExperiences: ExperienceEntity[];
//   private readonly partyProposals: PartyProposalEntity[];
//   private readonly partyRecruitments: PartyRecruitmentEntity[];

//   constructor(
//     user: UserEntity,
//     follows: FollowEntity[],
//     parties: PartyUserEntity[],
//     userSkills: UserSkillEntity[],
//     userExperiences: ExperienceEntity[],
//     partyProposals: PartyProposalEntity[],
//     partyRecruitments: PartyRecruitmentEntity[]
//   ) {
//     this.user = user;
//     this.follows = follows;
//     this.parties = parties;
//     this.userSkills = userSkills;
//     this.userExperiences = userExperiences;
//     this.partyProposals = partyProposals;
//     this.partyRecruitments = partyRecruitments;
//   }

// 여기에 사용자 애그리게이트에 대한 도메인 로직을 추가할 수 있습니다.
// 예: 사용자 프로필 수정, 사용자가 참여한 파티 검색 등
// }
