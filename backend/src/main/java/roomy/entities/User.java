package roomy.entities;

import jakarta.persistence.*;
import lombok.*;
import roomy.constants.Role;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private long id;

    @Column(unique = true) private String email;

    @Column(unique = true) private String username;

    private String password;

    private boolean isVerified;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
}
