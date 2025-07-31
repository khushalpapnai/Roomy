package roomy.entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "profile")
public class Profile {

    @Id @GeneratedValue private Long id;

    @OneToOne @JoinColumn(name = "user_id")
    private User user;

    private String fullName;
    private Integer age;
    private String gender;
    private String occupation;
    private String bio;
    private String city;
    private String profilePicUrl;

    @ElementCollection
    private List<String> lifestyle;  // e.g. ["non-smoker", "early riser"]

    @ElementCollection
    private List<String> socialLinks;  // e.g. ["linkedin.com/in/john", "github.com/john"]
}
