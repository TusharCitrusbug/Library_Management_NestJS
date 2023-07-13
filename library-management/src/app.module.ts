import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';
import { BookPurchaseManagerModule } from './modules/book-purchase-manager/book-purchase-manager.module';
import { BookGenreModule } from './modules/book-genre/book-genre.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { AuthorModule } from './modules/author/author.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, BookModule, BookPurchaseManagerModule, BookGenreModule, PublisherModule, AuthorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
