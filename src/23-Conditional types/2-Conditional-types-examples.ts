type Vague1 = "Hi" extends string ? true : false;

type Vague2 = "Hi" extends any ? true : false;

type Vague3 = "Hi" extends number ? true : false;

type Vague4 = string extends "Hi" ? true : false;

type Vague5 = 13 extends number ? true : false;

type Vague6 = number extends 13 ? true : false;

type Vague7 = number extends string ? true : false;

type Vague8 = number extends any ? true : false;

type Vague9 = string extends number ? true : false;

type Vague10 = true extends boolean ? true : false;

type Vague11 = true extends string ? true : false;

type Vague12 = boolean extends any ? true : false;

type Vague13 = false extends any ? true : false;

type Vague14 = string extends any ? true : false;

type Vague15 = 13 extends any ? true : false;

//Second part

type Vague16 = unknown extends any ? true : false;

type Vague17 = never extends any ? true : false;

type Vague18 = any extends any ? true : false;

type Vague19 = void extends any ? true : false;

type Vague20 = undefined extends any ? true : false;

type Vague20a = undefined extends unknown ? true : false;

type Vague21 = undefined extends void ? true : false;

type Vague22 = undefined extends never ? true : false;

type Vague23 = null extends any ? true : false;

type Vague24 = null extends never ? true : false;

type Vague25 = never extends never ? true : false;

type Vague26 = unknown extends never ? true : false;

type Vague27 = string[] extends any[] ? true : false;

type Vague28 = string[] extends string ? true : false;

type Vague29 = string[] extends any ? true : false;

type Vague30 = number[] extends any[] ? true : false;
