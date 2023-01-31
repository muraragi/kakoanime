/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Folder = "folder",
	Like = "like",
	Test = "test",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type FolderRecord = {
	likes?: RecordIdString[]
	title: string
	owner: RecordIdString
}

export type LikeRecord = {
	jikanId: string
	title: string
	poster?: string
	owner: RecordIdString
}

export type TestRecord = {
	fieeeeeld: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type FolderResponse<Texpand = unknown> = FolderRecord & BaseSystemFields<Texpand>
export type LikeResponse<Texpand = unknown> = LikeRecord & BaseSystemFields<Texpand>
export type TestResponse = TestRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	folder: FolderRecord
	like: LikeRecord
	test: TestRecord
	users: UsersRecord
}