package com.example.memories.controllers;

import com.example.memories.models.Memory;
import com.example.memories.services.MemoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/memories")
public class MemoryController {
    private final MemoryService memoryService;

    public MemoryController(MemoryService memoryService) {
        this.memoryService = memoryService;
    }

    @GetMapping()
    public List<Memory> getMemories() {
        return memoryService.getMemories();
    }

    @GetMapping("/{id}")
    public Memory getMemory(@PathVariable long id) {
        return memoryService.getMemory(id);
    }
}
