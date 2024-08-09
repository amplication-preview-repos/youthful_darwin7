import { Module } from "@nestjs/common";
import { SavingsAccountModule } from "./savingsAccount/savingsAccount.module";
import { P2PTransferModule } from "./p2PTransfer/p2PTransfer.module";
import { BankTransferModule } from "./bankTransfer/bankTransfer.module";
import { ReviewModule } from "./review/review.module";
import { MessageModule } from "./message/message.module";
import { InfluencerPageModule } from "./influencerPage/influencerPage.module";
import { FreelanceJobModule } from "./freelanceJob/freelanceJob.module";
import { UserProfileModule } from "./userProfile/userProfile.module";
import { MatchmakingModule } from "./matchmaking/matchmaking.module";
import { FreelanceCategoryModule } from "./freelanceCategory/freelanceCategory.module";
import { BitcoinTransactionModule } from "./bitcoinTransaction/bitcoinTransaction.module";
import { UserModule } from "./user/user.module";
import { FilterModule } from "./filter/filter.module";
import { UserSearchModule } from "./usersearch/usersearch.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    SavingsAccountModule,
    P2PTransferModule,
    BankTransferModule,
    ReviewModule,
    MessageModule,
    InfluencerPageModule,
    FreelanceJobModule,
    UserProfileModule,
    MatchmakingModule,
    FreelanceCategoryModule,
    BitcoinTransactionModule,
    UserModule,
    FilterModule,
    UserSearchModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
