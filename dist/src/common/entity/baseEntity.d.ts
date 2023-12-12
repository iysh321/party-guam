export declare enum StatusType {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SURVEY_READY = "survey_ready",
    SURVEY_ONGOING = "survey_ongoing",
    DELETED = "deleted",
    PENDING = "pending",
    PROCESSING = "processing",
    COMPLETED = "completed",
    APPROVED = "approved",
    REJECTED = "rejected",
    SUSPENDED = "suspended",
    CANCELED = "canceled",
    EXPIRED = "expired",
    ARCHIVED = "archived"
}
export declare class BaseEntity {
    status: StatusType;
    createdAt: Date;
    updatedAt: Date;
}
