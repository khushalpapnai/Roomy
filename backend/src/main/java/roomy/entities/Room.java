package roomy.entities;

import jakarta.persistence.*;
import roomy.constants.RoomType;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Room {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;
    private String title;
    private String description;
    private String location;
    private String city;
    private Integer rent;

    @Enumerated(EnumType.STRING)
    private RoomType roomType;

    private LocalDate availableFrom;

    @ElementCollection
    private List<String> images; // List of URLs

    private LocalDateTime createdAt = LocalDateTime.now();
}
