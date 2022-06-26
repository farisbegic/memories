package com.example.memories.services;

import com.example.memories.models.Memory;
import com.example.memories.repositories.MemoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemoryService {
    private final MemoryRepository memoryRepository;

    public MemoryService(MemoryRepository memoryRepository) {
        this.memoryRepository = memoryRepository;
    }

    public List<Memory> getMemories() {
        return memoryRepository.findAll();
    }
}
