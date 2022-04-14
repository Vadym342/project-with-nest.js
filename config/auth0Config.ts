import { ConfigService } from "@nestjs/config";

export const auth0Config = (configService: ConfigService) => {
    return {
        ...auth0Options(configService)
    }
}

const auth0Options = (configService: ConfigService) => ({
    audience: configService.get('AUTH0_AUDIENCE'),
    issuer: configService.get('AUTH0_ISSUER_URL'),
})