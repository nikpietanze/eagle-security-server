import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './schemas/item.schema'

@Controller('items')
export class ItemsController {
	constructor(private readonly itemsService: ItemsService) {}

	@Get()
	async findAll(): Promise<Item[]> {
		return this.itemsService.findAll()
	}

	// All params
	@Get(':id')
	async findOne(@Param() param): Promise<Item> {
		return this.itemsService.findOne(param.id)
	}

	@Post()
	async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
		return this.itemsService.create(createItemDto)
	}

	// Specific Param
	@Put(':id')
	async update(
		@Param('id') id,
		@Body() updateItemDto: CreateItemDto,
	): Promise<Item> {
		return this.itemsService.update(id, updateItemDto)
	}

	@Delete(':id')
	async delete(@Param('id') id): Promise<Item> {
		return this.itemsService.delete(id)
	}
}
