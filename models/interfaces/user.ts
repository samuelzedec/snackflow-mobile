export interface IUser {
	 	Id : string
    UserName : string
    NormalizedUserName : string
    Email : string
    NormalizedEmail : string
    EmailConfirmed : boolean
    PasswordHash : string
    SecurityStamp : string
    ConcurrencyStamp : string
    PhoneNumber : string
    PhoneNumberConfirmed : boolean
    TwoFactorEnabled : boolean
    DateTimeOffset? : Date 
    LockoutEnabled : boolean
    AccessFailedCount : number
    Name: string
    IsDeleted : string
}