import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePartyRequestDto } from './dto/create-party.request.dto';
import { UpdatePartyRequestDto } from './dto/update-party.request.dto';
import { CreatePartyCommand } from '../application/command/create-party.comand';
import { AccessJwtAuthGuard } from 'src/common/guard/jwt.guard';
import { PartyRequestDto } from './dto/party.request.dto';
import { PartyCommentRequestDto } from './dto/party-comment.request.dto';

@UseGuards(AccessJwtAuthGuard)
@Controller('parties')
@ApiTags('parties')
export class PartyController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOperation({ summary: '파티(게시물) 생성' })
  async createParty(@Body() dto: CreatePartyRequestDto): Promise<void> {
    const { title, content } = dto;

    const command = new CreatePartyCommand(title, content);

    return this.commandBus.execute(command);
  }

  @Put('')
  @ApiOperation({ summary: '파티(게시물) 수정' })
  async updateParty(@Body() dto: UpdatePartyRequestDto): Promise<void> {
    dto;
  }

  @Delete('')
  @ApiOperation({ summary: '파티(게시물) 삭제' })
  async deleteParty(@Body() dto: PartyRequestDto): Promise<void> {
    dto;
  }

  @Post('like/:partyId')
  @ApiOperation({ summary: '파티(게시물) 좋아요' })
  async createPartyToLike(@Param('partyId') partyId: number): Promise<void> {
    partyId;
  }

  @Delete('like/:partyId')
  @ApiOperation({ summary: '파티(게시물) 좋아요 취소' })
  async deletePartyToLike(@Param('partyId') partyId: number): Promise<void> {
    partyId;
  }

  @Post(':partyId/comments')
  @ApiOperation({ summary: '파티(게시물) 댓글 생성' })
  async createPartyComment(@Param('partyId') partyId: number, @Body() dto: PartyCommentRequestDto): Promise<void> {
    dto;
  }

  @Put('comments/:commentId')
  @ApiOperation({ summary: '파티(게시물) 댓글 수정' })
  async updatePartyComment(@Param('commentId') commentId: number, @Body() dto: PartyCommentRequestDto): Promise<void> {
    dto;
  }

  @Delete('comments/:commentId')
  @ApiOperation({ summary: '파티(게시물) 댓글 삭제' })
  async deletePartyComment(@Param('commentId') commentId: number, @Body() dto: UpdatePartyRequestDto): Promise<void> {
    dto;
  }

  @Post(':partyId/request')
  @ApiOperation({ summary: '파티 신청' })
  async sendPartyRequest(@Param('commentId') commentId: number): Promise<void> {
    commentId;
  }

  @Post(':partyId/invite/:nickname')
  @ApiOperation({ summary: '파티 초대' })
  async sendPartyInvite(
    @Param('commentId') commentId: number,
    @Param('nickname') nickname: string,
    @Body() dto: PartyRequestDto,
  ): Promise<void> {
    dto;
  }

  @Post(':partyId/transfer')
  @ApiOperation({ summary: '파티장 위임' })
  async transferPartyLeadership(
    @Param('commentId') commentId: number,
    @Body() dto: CreatePartyRequestDto,
  ): Promise<void> {
    dto;
  }
}
