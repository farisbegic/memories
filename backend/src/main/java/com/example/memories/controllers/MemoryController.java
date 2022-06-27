package com.example.memories.controllers;

import com.example.memories.models.dtos.CreateMemoryRequest;
import com.example.memories.models.dtos.MemoryResponse;
import com.example.memories.services.MemoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/memories")
public class MemoryController {
    private final MemoryService memoryService;

    public MemoryController(MemoryService memoryService) {
        this.memoryService = memoryService;
    }

    @GetMapping()
    public List<MemoryResponse> getMemories() {
        return memoryService.getMemories();
    }

    @GetMapping("/{id}")
    public MemoryResponse getMemory(@PathVariable long id) {
        return memoryService.getMemory(id);
    }

    @PostMapping()
    public MemoryResponse createMemory(@RequestBody CreateMemoryRequest createMemoryRequest) {
        return memoryService.createMemory(createMemoryRequest);
    }

    @DeleteMapping("/{id}")
    public MemoryResponse deleteMemory(@PathVariable long id) {
        return memoryService.deleteMemory(id);
    }

    @PutMapping("/{id}")
    public MemoryResponse updateMemory(@PathVariable long id, @RequestBody CreateMemoryRequest createMemoryRequest) {
        return memoryService.updateMemory(id, createMemoryRequest);
    }
}
