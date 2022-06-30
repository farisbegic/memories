package com.example.memories.services;

import com.example.memories.models.dtos.CreateMemoryRequest;
import com.example.memories.models.dtos.MemoryResponse;
import com.example.memories.models.entities.Memory;
import com.example.memories.repositories.MemoryRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MemoryService {
    private final MemoryRepository memoryRepository;

    public MemoryService(MemoryRepository memoryRepository) {
        this.memoryRepository = memoryRepository;
    }

    @Transactional
    public List<MemoryResponse> getMemories() {
        List<Memory> memories = memoryRepository.findAll();
        return memories.stream()
                .filter(Objects::nonNull)
                .map(memory -> new MemoryResponse(memory.getId(), memory.getTitle(), memory.getDescription()))
                .collect(Collectors.toList());

    }

    public MemoryResponse getMemory(long id) {
        Optional<Memory> memoryOptional = memoryRepository.findById(id);

        if (memoryOptional.isPresent()) {
            Memory memory = memoryOptional.get();
            return new MemoryResponse(memory.getId(), memory.getTitle(), memory.getDescription());
        }

        return null;
    }

    public MemoryResponse createMemory(CreateMemoryRequest createMemoryRequest) {
        Memory newMemory = new Memory(createMemoryRequest.getTitle(), createMemoryRequest.getDescription());
        Memory memory = memoryRepository.save(newMemory);

        return new MemoryResponse(memory.getId(), memory.getTitle(), memory.getDescription());
    }

    public MemoryResponse deleteMemory(long id) {
        Optional<Memory> memoryOptional = memoryRepository.findById(id);

        if (memoryOptional.isPresent()) {
            Memory memory = memoryOptional.get();
            memoryRepository.delete(memory);
            return new MemoryResponse(memory.getId(), memory.getTitle(), memory.getDescription());
        }

        return null;
    }

    public MemoryResponse updateMemory(long id, CreateMemoryRequest createMemoryRequest) {
        Optional<Memory> memoryOptional = memoryRepository.findById(id);

        if (memoryOptional.isPresent()) {
            Memory memory = memoryOptional.get();

            memory.setTitle(createMemoryRequest.getTitle());
            memory.setDescription(createMemoryRequest.getDescription());

            Memory updatedMemory = memoryRepository.save(memory);

            return new MemoryResponse(updatedMemory.getId(), updatedMemory.getTitle(), updatedMemory.getDescription());
        }

        return null;
    }

}
