import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class FindOneProductInput {
    @IsString()
    @Field(() => String)
    readonly companyUuid: string;

    @IsNumber()
    @Field(() => Int)
    readonly id: number;
}
