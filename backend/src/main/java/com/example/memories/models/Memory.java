package com.example.memories.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Memories")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Memory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "image", cascade = CascadeType.ALL)
    private List<MemoryImage> memoryImages;
}
