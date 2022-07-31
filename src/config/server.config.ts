import { INestApplication, VersioningType } from '@nestjs/common';

export default function (app: INestApplication) {
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
    prefix: 'api/v',
  });
  // app.useGlobalInterceptors(new TransformInterceptor());
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new HttpExceptionFilter());

  // if (process.env.NODE_ENV !== 'production') {
  //   const config = new DocumentBuilder()
  //     .setTitle('BLUEONION')
  //     .setDescription('APIs documents for BLUEONION')
  //     .setVersion('1.0')
  //     .addBearerAuth()
  //     .build();
  //   const document = SwaggerModule.createDocument(app, config);
  //   SwaggerModule.setup('api', app, document);
  // }
}
