import { Body, Controller, Post } from "@nestjs/common";
import { SearchRequestDto } from "./request/search.request.dto";
import { DiscoveryService } from "./providers/discovery.service";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { SearchResponseDto } from './response/search.response.dto';

@ApiTags("search")
@Controller("client")
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) { }

  @Post("/v2/search")
  @ApiResponse({
    status: 201,
    description: 'Successful search response',
    type: SearchResponseDto, // Define this DTO based on the response structure
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async search(@Body() searchDto: SearchRequestDto): Promise<any> {
    return await this.discoveryService.search(searchDto);
  }
}
